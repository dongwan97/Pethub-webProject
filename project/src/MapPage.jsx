import { useEffect, useState } from "react";
import { Map,MapMarker} from 'react-kakao-maps-sdk'
import "./MapPage.css";

const { kakao } = window;

function MapPage() {
  const [info, setInfo] = useState()
  const [markers, setMarkers] = useState([])
  const [map, setMap] = useState()
  const [currentCoordinate, setCurrentCoordinate] = useState(null);

  useEffect(() => { // 현재 위치를 가져오는 getCurrentCoordinate 함수로 currentCoordinate 값 설정위해
    const fetchData = async () => {
      try {
        const coordinate = await getCurrentCoordinate();
        setCurrentCoordinate(coordinate);
        console.log(1)
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  },[]);
  
  useEffect(() => {
    if (!map || !currentCoordinate) return    // currentCoordinate 상태가 업데이트된 후에 실행되게 하기 위해
    const ps = new kakao.maps.services.Places()

    var options = {   // 키워드 검색 시 사용할 options으로 location: currentCoordinate를 통해 현재 위치 주위에서 검색 가능하게
      location: currentCoordinate,
      radius: 2000,
      sort: kakao.maps.services.SortBy.DISTANCE,
    };
    console.log(2)

    ps.keywordSearch("동물병원", (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds()
        let markers = []

        for (var i = 0; i < data.length; i++) {
          // @ts-ignore
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: {
              place_name:data[i].place_name,
              address_name:data[i].address_name,
              phone:data[i].phone,
            }
          })
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
        }
        setMarkers(markers)

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds)
      }
    }, options)
  }, [map, currentCoordinate])

  const getCurrentCoordinate = async () => {  
    return new Promise((res, rej) => {
      // HTML5의 geolocaiton으로 사용할 수 있는지 확인합니다.
      if (navigator.geolocation) {
        // GeoLocation을 이용해서 접속 위치를 얻어옵니다.
        navigator.geolocation.getCurrentPosition(function (position) {
          const lat = position.coords.latitude; // 위도
          const lon = position.coords.longitude; // 경도
  
          const coordinate = new kakao.maps.LatLng(lat, lon);
          res(coordinate);
        });
      } else {
        rej(new Error("현재 위치를 불러올 수 없습니다."));
      }
    });
  };  
  markers.map((marker) => {
    console.log(marker.content.place_name)
  })

  return (
    <div className="whole_container" style={{display:"flex", flexDirection:"row"}}>
      <div style={{width:"30%", height:"600px", margin:"30px"}}>
        <div><h1 style={{paddingTop:"0"}}>동물병원 목록</h1></div>
        <div style={{height:"70%", overflow:"scroll"}}>
        {markers.map((marker) => (
          <p onClick={() => setInfo(marker)}>{marker.content.place_name}</p>
        ))}
        </div>
      </div>


        


      <br/>
      <div style={{width:"70%", display:"flex", flexDirection:"column"}}>
      {info && info.content !== "" ? (  // 마커를 선택하기 전에는 hi 표시, 마커 선택 후에는 해당하는 동물병원 이름, 주소 표시
        <div className="map_description">
        <h1>{info.content.place_name}</h1>
        {info.content.address_name}<br/>
        {info.content.phone}
      </div>
      ) : (
        <div className="map_description">병원을 선택해주세요</div>
      )}
      <Map // 로드뷰를 표시할 Container
        center={{
          lat: 37.566826,
          lng: 126.9786567,
        }}
        style={{
          width: "80%",
          height: "400px",
          borderRadius: "15px",
          marginLeft:"0"
        }}
        level={3}
        onCreate={setMap}
      >
        {markers.map((marker) => (
          <MapMarker
            key={`marker-${marker.content.place_name}-${marker.position.lat},${marker.position.lng}`}
            position={marker.position}
            onClick={() => setInfo(marker)}
          >
            {info &&info.content.place_name === marker.content.place_name && (
              <div style={{color:"#000"}}>{marker.content.place_name}</div>
            )}
          </MapMarker>
        ))}
      </Map>
      </div>
    </div>
  )
}

export default MapPage;
