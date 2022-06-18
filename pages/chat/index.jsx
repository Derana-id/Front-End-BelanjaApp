/* eslint-disable no-constant-condition */
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { io } from 'socket.io-client';
import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { TbSend } from 'react-icons/tb';
import { IoIosArrowBack } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import user from '../../assets/img/user.jpg';
import CardContact from '../../components/card/card-contact';
import BubblessReciver from '../../components/bubbless/bubbless-reciver';
import BubblessSender from '../../components/bubbless/bubbless-sender';
import { getDetailProfile } from '../../redux/actions/users';
import { getDetailStore } from '../../redux/actions/storeProfile';

const Chat = req => {
  const dispatch = useDispatch();

  const [isMessage, setIsMessage] = useState(false);
  const [getChatUser, setChatUser] = useState(false);
  const [socketio, setSocketio] = useState(null);
  const [listChat, setListChat] = useState([]);
  const [getActiveReceiver, setActiveReceiver] = useState({});
  console.log(getActiveReceiver);

  const token = Cookies.get('token');
  const receiver = Cookies.get('receiver');

  let getId;
  if (token) {
    const { id } = jwtDecode(token);
    getId = id;
  }

  // console.log(receiver);

  useEffect(() => {
    getDetailProfile(getId);
  }, []);

  const store = useSelector(state => {
    return state.detailStore;
  });

  useEffect(() => {
    dispatch(getDetailStore('dc9e00a6-53f9-45c5-833d-14a8b030b295'));
  }, []);

  // console.log(store);

  const getProfile = useSelector(state => {
    return state.getIdProfile;
  });

  console.log(getProfile.data.profile);
  console.log(getProfile.data.profile);

  useEffect(() => {
    const socket = io(process.env.NEXT_PUBLIC_API_URL);
    socket.on('send-message-response', response => {
      setListChat(response);
    });
    setSocketio(socket);
  }, []);

  // console.log(getActiveReceiver.store.id);
  //  Send message
  const [message, setMessage] = useState('');
  console.log(message);
  const onSubmit = e => {
    e.preventDefault();

    const payload = {
      sender: getProfile.data.profile.name,
      senderId: getProfile.data.profile.id,
      receiver: getActiveReceiver.store.name,
      receiverId: getActiveReceiver.store.id
    };
    setListChat([...listChat, payload]);

    const data = {
      sender: getProfile.data.profile.name,
      receiver: getActiveReceiver.store.id,
      message
    };
    socketio.emit('send-message', data);
    setMessage('');
  };

  // select receiver
  const selectReceiver = item => {
    setListChat([]);
    setActiveReceiver(item);
    // document.cookie = `receiver=${JSON.stringify(item)};path/`;
    socketio.emit('join-room', getProfile);

    const data = {
      sender: getProfile.id,
      receiver: item.id
    };
    socketio.emit('chat-history', data);
  };

  // console.log(getDetailStore.data);

  return (
    <div>
      <Head>
        <title>Blanja | My Bag</title>
        <meta name="" content="" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      {true ? (
        <div className="p-6 md:p-28 bg-white pt-24 md:pt-32 md:pb-10">
          {/* Mobile version */}
          <div className="md:flex">
            <div className="md:hidden">
              {isMessage ? null : (
                <div className="md:flex md:w-1/4 w-full shadow-lg bg-white h-full md:h-[480px]">
                  <div className="w-full mt-1 rounded pb-5">
                    <div className="border-solid border-b-[1px] border-gray pl-5 pt-3 pb-4">
                      <h6 className="text-black font-semibold text-lg">Chat</h6>
                    </div>
                    <div className="pl-5 pt-3 px-5 h-[410px] scroll-m-2 overflow-auto">
                      <CardContact
                        img={user}
                        username="Reza Akbar"
                        message="Lorem ipsum dolor sit as Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa amet atque cum et
        maxime! Est voluptas at distinctio, repudiandae quo rem magnam fugit in nulla aspernatur facilis quas soluta
        vitae."
                        onClick={() => setIsMessage(true)}
                      />
                      <CardContact img={user} username="Reza Akbar" message="Lorem ipsum dolor" />
                      <CardContact img={user} username="Reza Akbar" message="Lorem ipsum dolor" />
                      <CardContact img={user} username="Reza Akbar" message="Lorem ipsum dolor" />
                      <CardContact img={user} username="Reza Akbar" message="Lorem ipsum dolor" />
                      <CardContact img={user} username="Reza Akbar" message="Lorem ipsum dolor" />
                      <CardContact img={user} username="Reza Akbar" message="Lorem ipsum dolor" />
                      <CardContact img={user} username="Reza Akbar" message="Lorem ipsum dolor" />
                      <CardContact img={user} username="Reza Akbar" message="Lorem ipsum dolor" />
                    </div>
                  </div>
                </div>
              )}

              {isMessage ? (
                <div className="md:flex-1 md:block md:w-2/5 md:ml-8 shadow-lg rounded">
                  <div className="border-solid border-b-[1px] border-gray pl-5 pt-3">
                    <div className="flex">
                      <IoIosArrowBack onClick={() => setIsMessage(false)} className="text-2xl text-black mr-3 mt-2" />
                      <div>
                        <Image src={user} width={40} height={40} className="object-cover rounded-full" />
                      </div>
                      <div className="ml-4 flex items-center">
                        <p className="text-black font-semibold text-lg max-w-sm">Reza Akbar</p>
                      </div>
                    </div>
                  </div>
                  <div className="pl-5 pt-3 h-[340px] overflow-auto px-5">
                    <BubblessReciver message="hallo" />
                    <BubblessReciver message="hallo" />
                    <BubblessSender message="Juga" />
                    <BubblessReciver message="hallo" />
                    <BubblessReciver message="hallo" />
                    <BubblessSender message="Juga" />
                    <BubblessReciver message="hallo" />
                    <BubblessReciver message="hallo" />
                    <BubblessSender message="Juga" />
                    <BubblessReciver message="hallo" />
                  </div>
                  <div className="p-5 flex">
                    <input
                      type="text"
                      placeholder="Type your message..."
                      className="w-full p-2 pl-4 border-solid border-2 border-gray focus:outline-none pr-4 rounded-full"
                    />
                    <button className="rounded-full p-3 mx-2 text-white bg-primary text-2xl">
                      <TbSend />
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          {/* Device */}
          <div className="hidden md:block">
            <div className="flex">
              <div className="flex md:w-1/4 shadow-lg bg-white h-[480px]">
                <div className="w-full  mt-1 rounded">
                  <div className="border-solid border-b-[1px] border-gray pl-5 pt-3 pb-4">
                    <h6 className="text-black font-semibold text-lg">Chat</h6>
                  </div>
                  <div className="pl-5 pt-3 h-[410px] scroll-m-2 overflow-auto">
                    <CardContact
                      img="https://drive.google.com/uc?export=view&id=saad"
                      username="Reza Akbar"
                      message="Lorem ipsum dolor sit as Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa amet atque cum et
            maxime! Est voluptas at distinctio, repudiandae quo rem magnam fugit in nulla aspernatur facilis quas soluta
            vitae."
                      onClick={() => selectReceiver(store.data)}
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 w-2/5 ml-8 shadow-lg rounded">
                <div className="border-solid border-b-[1px] border-gray pl-5 pt-3">
                  <div className="flex">
                    <div>
                      <Image src={user} width={40} height={40} className="object-cover rounded-full" />
                    </div>
                    <div className="ml-4 flex items-center">
                      <p className="text-black font-semibold text-lg max-w-sm">Reza Akbar</p>
                    </div>
                  </div>
                </div>
                <div className="pl-5 pt-3 h-[340px] overflow-auto px-5">
                  {/* <BubblessReciver message="hallo" />
                  <BubblessReciver message="hallo" />
                  <BubblessSender message="Juga" />
                  <BubblessReciver message="hallo" />
                  <BubblessReciver message="hallo" />
                  <BubblessSender message="Juga" />
                  <BubblessReciver message="hallo" />
                  <BubblessReciver message="hallo" />
                  <BubblessSender message="Juga" />
                  <BubblessReciver message="hallo" /> */}
                  {listChat.map((item, index) => (
                    <div key={index}>
                      {/* {item.sender === getProfile.data.profile.name ? ( */}
                      <BubblessReciver message={item.message} />
                      {/* ) : ( */}
                      <BubblessSender message={item.message} />
                      {/* )} */}
                    </div>
                  ))}
                  {/* {JSON.stringify(listChat)} */}
                </div>
                <div className="p-5 flex">
                  <input
                    type="text"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    onSubmit={onSubmit}
                    placeholder="Type your message..."
                    className="w-full p-2 pl-4 border-solid border-2 border-gray focus:outline-none pr-4 rounded-full"
                  />
                  <button onClick={e => onSubmit(e)} className="rounded-full p-3 mx-2 text-white bg-primary text-2xl">
                    <TbSend />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-28 bg-white pt-32 pb-20">
          <div className="flex">
            <div className="flex w-1/4 shadow-lg bg-white h-[480px]">
              <div className="w-full  mt-1 rounded">
                <div className="border-solid border-b-[1px] border-gray pl-5 pt-3 pb-4">
                  <h6 className="text-black font-semibold text-lg">Chat</h6>
                </div>
                <div className="flex justify-center items-center h-[420px]">
                  <p className="font-bold text-bold">Belum ada chat</p>
                </div>
              </div>
            </div>
            <div className="flex-1 w-2/5 ml-8 shadow-lg rounded">
              <div className="border-solid border-b-[1px] border-gray pl-5 pt-11 pb-4" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Chat.layouts = 'MainLayout';
export default Chat;
