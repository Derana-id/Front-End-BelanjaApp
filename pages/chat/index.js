import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import user from '../../assets/img/user.jpg';
import CardContact from '../../components/card/card-contact';
import { TbSend } from 'react-icons/tb';
import BubblessReciver from '../../components/bubbless/bubbless-reciver';
import BubblessSender from '../../components/bubbless/bubbless-sender';

const Chat = () => {
  return (
    <div>
      <Head>
        <title>Blanja | My Bag</title>
        <meta name="" content="" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="p-28 bg-white pt-32 pb-20">
        <div className="flex">
          <div className="flex w-1/4 shadow-lg bg-white h-[480px]">
            <div className="w-full  mt-1 rounded">
              <div className="border-solid border-b-[1px] border-gray pl-5 pt-3 pb-4">
                <h6 className="text-black font-semibold text-lg">Chat</h6>
              </div>
              <div className="pl-5 pt-3 h-[410px] scroll-m-2 overflow-auto">
                <CardContact
                  img={user}
                  username="Reza Akbar"
                  message="Lorem ipsum dolor sit as Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa amet atque cum et
          maxime! Est voluptas at distinctio, repudiandae quo rem magnam fugit in nulla aspernatur facilis quas soluta
          vitae."
                />
                <CardContact img={user} username="Reza Akbar" message="Lorem ipsum dolor" />
                <CardContact img={user} username="Reza Akbar" message="Lorem ipsum dolor" />
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
        </div>
      </div>
    </div>
  );
};

Chat.layouts = 'MainLayout';
export default Chat;
