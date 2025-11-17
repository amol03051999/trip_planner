import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GetPlaceDetails, PHOTO_REF_URL } from '../../service/GlobalApi';

const PlaceCardItem = ({place}) => {

    
        const [photoUrl,setPhotoUrl] = useState();
    
        useEffect(()=>{
         place && GetPlacePhoto();
        },[place])
    
    const GetPlacePhoto = async () => {
  try {
    const data = {
      textQuery: place.placeName
    };

    const resp = await GetPlaceDetails(data);

    const placeData = resp.data?.places?.[0];

    if (!placeData) {
      console.warn("No place data found");
      return;
    }

    const photos = placeData.photos;

    if (!photos || photos.length === 0) {
      console.warn("No photos found");
      return;
    }

    // pick first photo safely
    const photoName = photos[0].name;

    const PhotoUrl = PHOTO_REF_URL.replace("{NAME}", photoName);
    setPhotoUrl(PhotoUrl);

  } catch (error) {
    console.error("Error fetching place photo:", error);
  }
};


  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+ place.placeName} target='_blank'>
    <div className='border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer'>
    <img src={photoUrl?photoUrl:'/placeholder.jpg '} className='w-[130px] h-[130px] rounded-xl object-cover'/>
    <div>
        <h2 className='font-bold text-lg'>{place.placeName}</h2>
        <p className='text-sm text-gray-400'>{place.placeDetails}</p>
        <h2 className='mt-2'>🕒 {place.timeToTravel}</h2>
    </div>
    </div>
    </Link>
  )
}

export default PlaceCardItem