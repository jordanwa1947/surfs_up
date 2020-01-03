export default function responseJson() {
  function searchLocations() {
    return `<p class="json">{<br>
        "data": [<br>
            {<br>
                "id": "1",<br>
                "type": "spot",<br>
                "attributes": {<br>
                    "id": 1,<br>
                    "spot_id": 1,<br>
                    "location": "Newquay - Fistral North",<br>
                    "latitude": 50.4184,<br>
                    "longitude": -5.0997<br>
                }<br>
            },<br>
            {<br>
                "id": "905",<br>
                "type": "spot",<br>
                "attributes": {<br>
                    "id": 905,<br>
                    "spot_id": 967,<br>
                    "location": "Newquay - Great Western",<br>
                    "latitude": 50.4162,<br>
                    "longitude": -5.0781<br>
                }<br>
            },<br>
            {<br>
                "id": "1211",<br>
                "type": "spot",<br>
                "attributes": {<br>
                    "id": 1211,<br>
                    "spot_id": 1336,<br>
                    "location": "Newquay - Tolcarne Wedge",<br>
                    "latitude": 50.4176,<br>
                    "longitude": -5.0749<br>
                }<br>
            },<br>
            {<br>
                "id": "1212",<br>
                "type": "spot",<br>
                "attributes": {<br>
                    "id": 1212,<br>
                    "spot_id": 1337,<br>
                    "location": "Newquay - Porth",<br>
                    "latitude": 50.4256,<br>
                    "longitude": -5.0659<br>
                }<br>
            },<br>
            {<br>
                "id": "1223",<br>
                "type": "spot",<br>
                "attributes": {<br>
                    "id": 1223,<br>
                    "spot_id": 1360,<br>
                    "location": "Newquay-  Little Fistral",<br>
                    "latitude": 50.4229,<br>
                    "longitude": -5.1<br>
                }<br>
            },<br>
            {<br>
                "id": "1224",<br>
                "type": "spot",<br>
                "attributes": {<br>
                    "id": 1224,<br>
                    "spot_id": 1361,<br>
                    "location": "Newquay - Fistral South ",<br>
                    "latitude": 50.4141,<br>
                    "longitude": -5.1025<br>
                }<br>
            },<br>
            {<br>
                "id": "1225",<br>
                "type": "spot",<br>
                "attributes": {<br>
                    "id": 1225,<br>
                    "spot_id": 1362,<br>
                    "location": "Newquay - Cribbar",<br>
                    "latitude": 50.4254,<br>
                    "longitude": -5.1026<br>
                }<br>
            },<br>
            {<br>
                "id": "5019",<br>
                "type": "spot",<br>
                "attributes": {<br>
                    "id": 5019,<br>
                    "spot_id": 6025,<br>
                    "location": "Newquay - Towan",<br>
                    "latitude": 50.4175,<br>
                    "longitude": -5.0841<br>
                }<br>
            }<br>
        ]<br>
    } </p>`;
  }

  function allLocations() {
    return `<p class='json'> "data": [<br>
        {<br>
            "id": "1",<br>
            "type": "spot",<br>
            "attributes": {<br>
                "id": 1,<br>
                "spot_id": 1,<br>
                "location": "Newquay - Fistral North",<br>
                "latitude": 50.4184,<br>
                "longitude": -5.0997<br>
            }<br>
        },<br>
        {<br>
            "id": "2",<br>
            "type": "spot",<br>
            "attributes": {<br>
                "id": 2,<br>
                "spot_id": 2,<br>
                "location": "Porthtowan",<br>
                "latitude": 50.2891,<br>
                "longitude": -5.2461<br>
            }<br>
        },<br>
        {<br>
            "id": "3",<br>
            "type": "spot",<br>
            "attributes": {<br>
                "id": 3,<br>
                "spot_id": 3,<br>
                "location": "Gwithian",<br>
                "latitude": 50.2235,<br>
                "longitude": -5.399<br>
            }<br>
        },<br>
        {<br>
            "id": "4",<br>
            "type": "spot",<br>
            "attributes": {<br>
                "id": 4,<br>
                "spot_id": 4,<br>
                "location": "Sennen",<br>
                "latitude": 50.0802,<br>
                "longitude": -5.6976<br>
            }<br>
        },<br>
        {<br>
            "id": "5",<br>
            "type": "spot",<br>
            "attributes": {<br>
                "id": 5,<br>
                "spot_id": 5,<br>
                "location": "Constantine",<br>
                "latitude": 50.5333,<br>
                "longitude": -5.0221<br>
            }<br>
        },<br>
    ... </p>`;
  }

  function surfForecast() {
    return `<p class='json'>{<br>
          "data": {<br>
              "id": "1",<br>
              "type": "forecast",<br>
              "attributes": {<br>
                  "faded_rating": 0,<br>
                  "solid_rating": 3,<br>
                  "issue_timestamp": "Wed Jan  1 06:00:00 2020",<br>
                  "local_timestamp": "Wed Jan  1 21:00:00 2020",<br>
                  "min_break_height": 2,<br>
                  "max_break_height": 4,<br>
                  "wave_unit": "ft",<br>
                  "wind_direction": "S",<br>
                  "wind_speed": 9,<br>
                  "wind_gusts": 12,<br>
                  "wind_unit": "mph",<br>
                  "temperature": 47,<br>
                  "temperature_unit": "f",<br>
                  "charts": {<br>
                      "swell": "https://charts-s3.msw.ms/archive/wave/750/1-1577912400-1.gif",<br>
                      "period": "https://charts-s3.msw.ms/archive/wave/750/1-1577912400-2.gif",<br>
                      "wind": "https://charts-s3.msw.ms/archive/gfs/750/1-1577912400-4.gif",<br>
                      "pressure": "https://charts-s3.msw.ms/archive/gfs/750/1-1577912400-3.gif"<br>
                  },<br>
                  "location": {<br>
                      "id": 1,<br>
                      "spot_id": 1,<br>
                      "location": "Newquay - Fistral North",<br>
                      "latitude": 50.4184,<br>
                      "longitude": -5.0997<br>
                  }<br>
              }<br>
          }<br>
      }</p>`;
  }

  return {
    searchLocations: searchLocations(),
    allLocations: allLocations(),
    surfForecast: surfForecast()
  };
}
