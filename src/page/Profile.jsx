import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Cardpost } from '../components/Cardpost';
const Profile = () => {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState({});
    const { id } = useParams();
    useEffect(() => {
        axios.get('http://localhost:8005/api/annonce/exchanger/' + id)
          .then(async (response) => {
            const user = response.data[0];
            setUser(user);
            const userposts = await axios.get(`http://localhost:8005/api/annonce/userpost/${id}`);
            
            setPosts(userposts.data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }, []);
      console.log(posts)
      console.log(user)
      return (
        <div>
        <div className="relative max-w-md mx-auto md:max-w-2xl  mb-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full flex justify-center">
                <div className="relative">
                  <img
                    src={user.profileimage}
                    className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                  />
                </div>
              </div>
            </div>
            <div className="w-full text-center mt-20">
         
         </div>
            <div className="text-center mt-6">
              <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">{user.lastname}</h3>
              <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>email :{user.email}
                <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i> birthday : {user.birthdate}
              </div>
              <div className="mt-6 py-6 border-t border-slate-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full px-4">
                    <p className="font-light leading-relaxed text-slate-600 mb-4"> num :{user.phonenum}</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
    <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
        {
 posts.map((e,i )=> (
<Cardpost key={i} prop={e}  />
 ))
       }
              </div>
        </div>
      );

};

export default Profile;