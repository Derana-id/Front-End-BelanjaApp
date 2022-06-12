/* eslint-disable no-constant-condition */
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { TbSend } from 'react-icons/tb';
import { IoIosArrowBack } from 'react-icons/io';
import user from '../../assets/img/user.jpg';
import CardContact from '../../components/card/card-contact';
import BubblessReciver from '../../components/bubbless/bubbless-reciver';
import BubblessSender from '../../components/bubbless/bubbless-sender';

const Chat = () => {
  const [isMessage, setIsMessage] = useState(false);
  return (
    <div>
      <Head>
        <title>Blanja | My Bag</title>
        <meta name="" content="" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      {true ? (
        <div className="p-6 md:p-28 bg-white pt-24 md:pt-32 md:pb-10">
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
          <div className="hidden md:block">
            <div className="flex">
              <div className="flex md:w-1/4 shadow-lg bg-white h-[480px]">
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