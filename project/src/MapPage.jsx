import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import "./MapPage.css";
import { startTransition } from "react";

const { kakao } = window;

function MapPage() {
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();
  const [currentCoordinate, setCurrentCoordinate] = useState(null);

  useEffect(() => {
    // 현재 위치를 가져오는 getCurrentCoordinate 함수로 currentCoordinate 값 설정위해
    const fetchData = async () => {
      try {
        const coordinate = await getCurrentCoordinate();
        setCurrentCoordinate(coordinate);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!map || !currentCoordinate) return; // currentCoordinate 상태가 업데이트된 후에 실행되게 하기 위해
    const ps = new kakao.maps.services.Places();

    var options = {
      // 키워드 검색 시 사용할 options으로 location: currentCoordinate를 통해 현재 위치 주위에서 검색 가능하게
      location: currentCoordinate,
      radius: 1800,
      sort: kakao.maps.services.SortBy.DISTANCE,
    };


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
              place_name:data[i].place_name,  // 이름
              address_name:data[i].address_name,  // 주소
              road_address_name:data[i].road_address_name,  // 지번
              phone:data[i].phone,  // 전화번호
              place_url:data[i].place_url,  // 링크
              id:i,
            }
          })
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
        }
      },
      options
    );
  }, [map, currentCoordinate]);

  const getCurrentCoordinate = async () => {
    return new Promise((res, rej) => {
      // HTML5의 geolocaiton으로 사용할 수 있는지 확인
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

  return (
    <div className="whole_container">
      <div className="map-list-container" >

        <div className="map-list-header"><h2>동물병원 목록</h2></div>

        <div className="map-list">
        {markers.map((marker) => ( 
          <div className="map-hospital-info" onMouseOver={() => setInfo(marker)}>
            <h3 className="map-list-name">{marker.content.place_name}</h3>  
            <p className="map-link" onClick={() => window.open(`${marker.content.place_url}`,"_blank")}>{marker.content.place_url}</p>
            <p>{marker.content.address_name}</p>
            <p className="map-list-address"> {marker.content.road_address_name}</p>
            <p className="map-list-phone">{marker.content.phone}</p>
          </div>
        ))}
        </div>
      </div>
        style={{
          width: "100%",
          height: "100%",
          zIndex: "10",
          position: "absolute",
        }}
      >
        <Map // 로드뷰를 표시할 Container
          center={{
            lat: 37.566826,
            lng: 126.9786567,
          }}
          style={{
            width: "100%",
            height: "100%",
            marginLeft: "0",
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
              {info &&
                info.content.place_name === marker.content.place_name && (
                  <div style={{ color: "#000" }}>
                    {marker.content.place_name}
                  </div>
                )}
            </MapMarker>
          ))}
        </Map>
      </div>
    </div>
  );
}

export default MapPage;
