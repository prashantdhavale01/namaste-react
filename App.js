import React from "react";
import ReactDOM from "react-dom/client"

/*
 *Food Ordering App
  *Header
   - Logo
   - Nav Item - Home, About Us, Contact Us, Cart
  *Body
   - Search
   - Card Container
     - Cards 
       - Image
       - Name of restaurant 
       - Ratings 
  *Footer
   - Copyright
*/

const Header = () => {
  return(
    <div className="header-container">
      <div className="logo-container">
         <img className="logo-image" src="data:image/png;base64,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" alt="logo" />
      </div>
      <div className="nav-container">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

const resObjList = [
  {
    "info": {
        "id": "21001",
        "name": "Pizza Hut",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/1a74ecfe-ccf6-43b8-9288-eb91319bdce8_21001.jpg",
        "locality": "F.C. Road",
        "areaName": "Shivajinagar",
        "costForTwo": "₹350 for two",
        "cuisines": [
            "Pizzas"
        ],
        "avgRating": 4.2,
        "parentId": "721",
        "avgRatingString": "4.2",
        "totalRatingsString": "12K+",
        "sla": {
            "deliveryTime": 34,
            "lastMileTravel": 2,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "2.0 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-12-22 02:00:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹99"
        },
        "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {}
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "4.3",
                "ratingCount": "4.3K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-33494d56-584b-4b18-8827-0e23e3649a53"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/pune/pizza-hut-f-c-road-shivajinagar-rest21001",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
      "info": {
          "id": "323532",
          "name": "Chinese Wok",
          "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
          "locality": "Bibwewadi",
          "areaName": "Koregaon Park",
          "costForTwo": "₹300 for two",
          "cuisines": [
              "Chinese",
              "Asian",
              "Tibetan",
              "Desserts"
          ],
          "avgRating": 4.1,
          "parentId": "61955",
          "avgRatingString": "4.1",
          "totalRatingsString": "3.1K+",
          "sla": {
              "deliveryTime": 48,
              "lastMileTravel": 4.4,
              "serviceability": "SERVICEABLE",
              "slaString": "45-50 mins",
              "lastMileTravelString": "4.4 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-12-21 23:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹149"
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "3.0",
                  "ratingCount": "41"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-33494d56-584b-4b18-8827-0e23e3649a53"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/pune/chinese-wok-bibwewadi-koregaon-park-rest323532",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
      "info": {
          "id": "508883",
          "name": "The Belgian Waffle Co.",
          "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
          "locality": "Ambedkar Road",
          "areaName": "Camp Area",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Waffle",
              "Desserts",
              "Ice Cream"
          ],
          "avgRating": 4.6,
          "veg": true,
          "parentId": "2233",
          "avgRatingString": "4.6",
          "totalRatingsString": "851",
          "sla": {
              "deliveryTime": 28,
              "lastMileTravel": 2.3,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "2.3 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-12-22 01:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50"
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-33494d56-584b-4b18-8827-0e23e3649a53"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/pune/the-belgian-waffle-co-ambedkar-road-camp-area-rest508883",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
      "info": {
          "id": "243625",
          "name": "KFC",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/4c1906b4-f727-434b-8496-a2e669269dde_243625.JPG",
          "locality": "Deccan Gymkhana",
          "areaName": "Deccan Gymkhana",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Burgers",
              "Rolls & Wraps",
              "Fast Food"
          ],
          "avgRating": 4.3,
          "parentId": "547",
          "avgRatingString": "4.3",
          "totalRatingsString": "3.4K+",
          "sla": {
              "deliveryTime": 28,
              "lastMileTravel": 2.2,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "2.2 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-12-21 23:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80"
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "4.0",
                  "ratingCount": "4.3K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-33494d56-584b-4b18-8827-0e23e3649a53"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/pune/kfc-deccan-gymkhana-rest243625",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
      "info": {
          "id": "42581",
          "name": "Burger King",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/55d0daa1-ad2e-4893-be06-4709c5c68d49_42581.JPG",
          "locality": "The Pavillion Mall",
          "areaName": "Shivajinagar",
          "costForTwo": "₹350 for two",
          "cuisines": [
              "Burgers",
              "American"
          ],
          "avgRating": 4.1,
          "parentId": "166",
          "avgRatingString": "4.1",
          "totalRatingsString": "12K+",
          "sla": {
              "deliveryTime": 43,
              "lastMileTravel": 4.3,
              "serviceability": "SERVICEABLE",
              "slaString": "40-45 mins",
              "lastMileTravelString": "4.3 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-12-22 02:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-33494d56-584b-4b18-8827-0e23e3649a53"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/pune/burger-king-the-pavillion-mall-shivajinagar-rest42581",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
      "info": {
          "id": "9844",
          "name": "Subway",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/4de95d98-ffe3-4292-ab0e-b71f408b3b38_9844.JPG",
          "locality": "Gokhale Nagar",
          "areaName": "Shivajinagar",
          "costForTwo": "₹350 for two",
          "cuisines": [
              "sandwich",
              "Salads",
              "wrap",
              "Healthy Food"
          ],
          "avgRating": 4.4,
          "parentId": "2",
          "avgRatingString": "4.4",
          "totalRatingsString": "13K+",
          "sla": {
              "deliveryTime": 44,
              "lastMileTravel": 3.7,
              "serviceability": "SERVICEABLE",
              "slaString": "40-45 mins",
              "lastMileTravelString": "3.7 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-12-21 23:59:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80"
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-33494d56-584b-4b18-8827-0e23e3649a53"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/pune/subway-gokhale-nagar-shivajinagar-rest9844",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
      "info": {
          "id": "456986",
          "name": "Domino's Pizza",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/9809830c-6ca7-4fc7-bd89-6e64c72acc69_456986.jpg",
          "locality": "Somwar Peth",
          "areaName": "Rasta Peth",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Pizzas",
              "Italian",
              "Pastas",
              "Desserts"
          ],
          "avgRating": 3.8,
          "parentId": "2456",
          "avgRatingString": "3.8",
          "totalRatingsString": "1.0K+",
          "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 1.4,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "1.4 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-12-22 02:59:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹175 OFF",
              "subHeader": "ABOVE ₹999",
              "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-33494d56-584b-4b18-8827-0e23e3649a53"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/pune/dominos-pizza-somwar-peth-rasta-peth-rest456986",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
      "info": {
          "id": "820738",
          "name": "Baskin Robbins - Ice Cream Desserts",
          "cloudinaryImageId": "63f08910648b54b9e7d522a5470895fa",
          "locality": "FC ROAD",
          "areaName": "DMH COMPLEX",
          "costForTwo": "₹250 for two",
          "cuisines": [
              "Desserts",
              "Ice Cream"
          ],
          "avgRating": 4.8,
          "veg": true,
          "parentId": "5588",
          "avgRatingString": "4.8",
          "totalRatingsString": "55",
          "sla": {
              "deliveryTime": 27,
              "lastMileTravel": 2,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "2.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-12-21 23:59:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                      "description": "bolt!"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "bolt!",
                                  "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-33494d56-584b-4b18-8827-0e23e3649a53"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/pune/baskin-robbins-ice-cream-desserts-fc-road-dmh-complex-rest820738",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  }
]

const Card = (props) => {
  const {resData} = props;
  const {name, avgRatingString, cuisines, costForTwo, deliveryTime, cloudinaryImageId} = resData.info; 
  return(
    <div className="card">
      <img className="card-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
      <h3>{name}</h3>
      <div>{avgRatingString} • {deliveryTime} mins</div>
      <div>{cuisines.join(', ')}</div>
      <div>{costForTwo}</div>
    </div>
  );
}

const Body = () => {
  return(
    <div className="body-container">
      <div className="search-container">
        <input type="text" placeholder="Food / Hotel" />
        <button type="button">Search</button>
      </div>
      <div className="card-container">
        {
          resObjList.map((restaurant) => (
            <Card key={restaurant.info.id} resData={restaurant} />)
          )
        }
      </div>
    </div>
  );
}

{/* Component Composition */}
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);