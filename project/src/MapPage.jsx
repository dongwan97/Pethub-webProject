import { useEffect, useState, useReducer} from "react";
import { Map,MapMarker} from 'react-kakao-maps-sdk'
import "./MapPage.css";

const { kakao } = window;

function reducer(state, action) {
  switch (action.type) {
    case 'SET_MARKERS':
      return {
        ...state,
        markers: [...action.value]
      };
    case 'SET_MAP':
      return {
        ...state,
        map: action.value
      };
    case 'SET_CURRENT_COORDINATE':
      return {
        ...state,
        currentCoordinate: action.value
      };
    case 'SET_INFO':
      return {
        ...state,
        info: action.value
      };
    default:
      return state;
  }
}

function MapPage() {
  const initialState = {
    info: null,
    markers: [],
    map: null,
    currentCoordinate: null
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => { // 현재 위치를 가져오는 getCurrentCoordinate 함수로 currentCoordinate 값 설정위해
    const fetchData = async () => {
      try {
        const coordinate = await getCurrentCoordinate();
        dispatch({ type: 'SET_CURRENT_COORDINATE', value: coordinate });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  },[]);
  
  useEffect(() => {
    if (!state.map || !state.currentCoordinate) return;    // currentCoordinate 상태가 업데이트된 후에 실행되게 하기 위해
    const ps = new kakao.maps.services.Places()

    var options = {   // 키워드 검색 시 사용할 options으로 location: currentCoordinate를 통해 현재 위치 주위에서 검색 가능하게
      location: state.currentCoordinate,
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
        dispatch({ type: 'SET_MARKERS', value: markers });

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        state.map.setBounds(bounds)
      }
    }, options)

  }, [state.map, state.currentCoordinate])

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
        {state.markers.map((marker) => ( 
          <div className="map-hospital-info" onMouseOver={() => dispatch({ type: 'SET_INFO', value: marker })}>
            <h3 className="map-list-name">{marker.content.place_name}</h3>  
            <p className="map-link" onClick={() => window.open(`${marker.content.place_url}`,"_blank")}>{marker.content.place_url}</p>
            <p>{marker.content.address_name}</p>
            <p className="map-list-address"> {marker.content.road_address_name}</p>
            <p className="map-list-phone">{marker.content.phone}</p>
          </div>
        ))}
        </div>

      </div>
        
      <div className="map-container">
      <Map // 로드뷰를 표시할 Container
        center={{
          lat: 37.566826,
          lng: 126.9786567,
        }}
        style={{
          width: "100%",
          height: "100%",
          marginLeft:"0",
        }}
        level={3}
        onCreate={(map) => {
          // 현재 state.map이 존재하면 업데이트하지 않도록 체크
          if (state.map) return;
          dispatch({ type: 'SET_MAP', value: map });
        }}
      >
        {state.markers.map((marker) => (
          <MapMarker
            key={`marker-${marker.content.place_name}-${marker.position.lat},${marker.position.lng}`}
            position={marker.position}
            onClick={() => dispatch({ type: 'SET_INFO', value: marker })}
          >
            {state.info &&state.info.content.place_name === marker.content.place_name && (
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
