import { useEffect, useState } from "react";
import { Map,MapMarker} from 'react-kakao-maps-sdk'
import "./MapPage.css";

const { kakao } = window;

const getCurrentCoordinate = async () => {
  console.log("getCurrentCoordinate 함수 실행!!!");
  return new Promise((res, rej) => {
    // HTML5의 geolocaiton으로 사용할 수 있는지 확인합니다.
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다.
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position);
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

function MapPage() {
  const [info, setInfo] = useState()
  const [markers, setMarkers] = useState([])
  const [map, setMap] = useState()

  useEffect(() => {
    if (!map) return
    const ps = new kakao.maps.services.Places()

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
    })
  }, [map])

  return (
    <div className="whole_container">
      {info && info.content !== "" ? (  // 마커를 선택하기 전에는 hi 표시, 마커 선택 후에는 해당하는 동물병원 이름, 주소 표시
        <div>
        {info.content.place_name}<br/>
        {info.content.address_name}<br/>
        {info.content.phone}
      </div>
      ) : (
        <div>hi</div>
      )}


      <Map // 로드뷰를 표시할 Container
        center={{
          lat: 37.566826,
          lng: 126.9786567,
        }}
        style={{
          width: "70%",
          height: "400px",
          borderRadius: "15px"
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
  )
}

export default MapPage;
