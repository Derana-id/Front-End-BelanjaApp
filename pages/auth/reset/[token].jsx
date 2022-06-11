import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { toastify } from '../../../utils/toastify';
import { sweetAlert } from '../../../utils/sweetalert';
import { reset } from '../../../redux/actions/auth';
import Input from '../../../components/Input/index';
import Button from '../../../components/Button';

export default function index() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const initialState = {
    password: '',
    passwordConfirmation: ''
  };
  const [form, setForm] = useState(initialState);

  const { password, passwordConfirmation } = form;

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!password || !passwordConfirmation) {
      sweetAlert('All field must be filled!', 'error');
    } else if (password !== passwordConfirmation) {
      sweetAlert('Password confirmation does not match password', 'error');
    } else {
      setIsLoading(true);
      reset({ password, passwordConfirmation }, router.query.token)
        .then(res => {
          router.push('/auth/login');
          sweetAlert(res.message);
        })
        .catch(err => {
          if (err.response.data.code === 422) {
            const { error } = err.response.data;
            error.map(e => toastify(e, 'error'));
          } else {
            sweetAlert(err.response.data.message, 'error');
          }
        })
        .finally(() => {
          setIsLoading(false);
          setForm({
            password: '',
            passwordConfirmation: ''
          });
        });
    }
  };

  return (
    <div className="flex min-h-screen">
      <Head>
        <title>Belanja | Reset password</title>
        <meta name="" content="" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="sm:w-full md:w-2/6 border-slate-200 rounded-xl mx-auto p-5 flex flex-col items-center relative">
        <Image src="/logoAuth.svg" width={150} height={100} layout="fixed" />
        <label className="font-bold mb-2">Reset password</label>
        <label className="font-medium text-[16px] leading-5 text-[#F01F0E] mb-8">
          You need change your password to active your account
        </label>
        <form className="w-full" onSubmit={handleSubmit}>
          <Input placeholder="Password" id="password" type="password" value={password} onChange={handleChange} />
          <Input
            placeholder="Confirmation New Password"
            id="passwordConfirmation"
            type="password"
            value={passwordConfirmation}
            onChange={handleChange}
          />
          <Link href="/auth/forgot">
            <label className="text-special-warning mr-0 cursor-pointer absolute right-6">Forgot password?</label>
          </Link>
          {isLoading ? <Button disabled="disabled" name="Loading" /> : <Button name="Submit" type="submit" />}
        </form>
      </div>
    </div>
  );
}
