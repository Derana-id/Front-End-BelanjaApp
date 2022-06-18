// import React, { useState, useRef } from 'react';
// import CreatableSelect from 'react-select/creatable';
// import jwtDecode from 'jwt-decode';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import moment from 'moment';
// import { toastr } from '../../utils/toastr';
// import Header from '../../components/atoms/Header';
// import Card from '../../components/atoms/Card';
// import Image from '../../components/atoms/Image';
// import Button from '../../components/atoms/Button';
// import styles from '../../styles/Profile.module.css';
// import PurpleBackground from '../../components/atoms/PurpleBackground';
// import FormInput from '../../components/atoms/FormInput';
// import { getDataCookie } from '../../middlewares/authorization';
// import { updateUser, updatePhoto } from '../../store/actions/worker';
// import { API_URL } from '../../helpers/env';

// export async function getServerSideProps(context) {
//   try {
//     const storageCookie = await getDataCookie(context);
//     if (!storageCookie.token) {
//       return {
//         redirect: {
//           destination: '/auth/login',
//           permanent: false,
//         },
//       };
//     }
//     const decoded = jwtDecode(context.req.cookies.token);

//     const response = await axios.get(`${API_URL}worker/${decoded.user_id}`, {
//       headers: {
//         Authorization: `Bearer ${context.req.cookies.token}`,
//       },
//     });

//     return {
//       props: {
//         data: response.data.data,
//         token: context.req.cookies.token,
//         error: false,
//         message: 'Success get data',
//       },
//     };
//   } catch (error) {
//     return {
//       props: {
//         data: null,
//         token: context.req.cookies.token,
//         error: true,
//         message: error.message,
//       },
//     };
//   }
// }

// const editUser = ({ data, token, error, message }) => {
//   const [loading, setLoading] = useState(false);
//   const [edit, setEdit] = useState(false);
//   const hiddenFileInput = useRef(null);
//   const [form, setForm] = useState({
//     name: data.user.name || '',
//     email: data.login[0].email || '',
//     phoneNumber: data.login[0].phone_number || '',
//     jobDesk: data.user.job_desk || '',
//     jobStatus: data.user.job_status || '',
//     domicile: data.user.domicile || '',
//     workPlace: data.user.work_place || '',
//     description: data.user.description || '',
//     instagram: data.user.instagram || '',
//     github: data.user.github || '',
//     gitlab: data.user.gitlab || '',
//     linkedin: data.user.linkedin || '',
//     skill: [],
//     experience: data.experience || [],
//     portofolio: data.portofolio || [],
//   });

//   const handleClick = () => {
//     hiddenFileInput.current.click();
//   };

//   const handleImage = (e) => {
//     try {
//       setLoading(true);
//       const decoded = jwtDecode(token);

//       const photo = e.target.files[0];
//       const formData = new FormData();
//       formData.append('photo', photo);

//       updatePhoto(formData, decoded.user_id)
//         .then((res) => {
//           Swal.fire({
//             title: 'Success!',
//             text: res.message,
//             icon: 'success',
//           }).then(() => {
//             window.location.reload();
//           });
//         })
//         .catch((err) => {
//           Swal.fire({
//             title: 'Failed!',
//             text: err.response.data.message,
//             icon: 'error',
//           });
//         })
//         .finally(() => {
//           setLoading(false);
//         });
//     } catch (err) {
//       Swal.fire({
//         title: 'Error!',
//         text: err.message,
//         icon: 'error',
//       });
//     }
//   };

//   const handleInput = (e) => {
//     setForm({
//       ...form,
//       [e.target.id]: e.target.value,
//     });
//   };

//   const handleAddExp = () => {
//     setForm({
//       ...form,
//       experience: [
//         ...form.experience,
//         {
//           position: '',
//           company: '',
//           start_date: '',
//           end_date: '',
//           description: '',
//           image: '',
//         },
//       ],
//     });
//   };

//   const handleInputExp = (e, index) => {
//     const newExp = form.experience.map((item, i) => {
//       if (i === index) {
//         return {
//           ...item,
//           [e.target.id]:
//             e.target.id === 'image' ? e.target.files[0] : e.target.value,
//         };
//       }
//       return item;
//     });

//     setForm({
//       ...form,
//       experience: newExp,
//     });
//   };

//   const handleDeleteExp = (index) => {
//     const newExp = form.experience.filter((item, i) => {
//       if (i !== index) {
//         return item;
//       }
//     });

//     setForm({
//       ...form,
//       experience: newExp,
//     });
//   };

//   const handleAddPorto = () => {
//     setForm({
//       ...form,
//       portofolio: [
//         ...form.portofolio,
//         {
//           app_name: '',
//           link_repository: '',
//           type_portofolio: '',
//           image: '',
//         },
//       ],
//     });
//   };

//   const handleInputPorto = (e, index) => {
//     const newPorto = form.portofolio.map((item, i) => {
//       if (i === index) {
//         return {
//           ...item,
//           [e.target.id]:
//             e.target.id === 'image' ? e.target.files[0] : e.target.value,
//         };
//       }
//       return item;
//     });

//     setForm({
//       ...form,
//       portofolio: newPorto,
//     });
//   };

//   const handleDeletePorto = (index) => {
//     const newPorto = form.portofolio.filter((item, i) => {
//       if (i !== index) {
//         return item;
//       }
//     });

//     setForm({
//       ...form,
//       portofolio: newPorto,
//     });
//   };

//   const handleReset = () => {
//     setForm({
//       name: data.user.name || '',
//       email: data.login[0].email || '',
//       phoneNumber: data.login[0].phone_number || '',
//       jobDesk: data.user.job_desk || '',
//       jobStatus: data.user.job_status || '',
//       domicile: data.user.domicile || '',
//       workPlace: data.user.work_place || '',
//       description: data.user.description || '',
//       instagram: data.user.instagram || '',
//       github: data.user.github || '',
//       gitlab: data.user.gitlab || '',
//       linkedin: data.user.linkedin || '',
//       skill: [],
//       experience: [],
//       portofolio: [],
//     });
//   };

//   const handleSubmit = () => {
//     if (
//       !form.name
//       || !form.email
//       || !form.phoneNumber
//       || !form.jobDesk
//       || !form.jobStatus
//       || !form.domicile
//       || !form.workPlace
//       || !form.description
//     ) {
//       Swal.fire({
//         title: 'Error!',
//         text: 'All field must be filled!',
//         icon: 'error',
//       });
//     } else {
//       setEdit(true);
//       try {
//         const formData = new FormData();
//         // DATA USER
//         formData.append('name', form.name);
//         formData.append('email', form.email);
//         formData.append('phoneNumber', form.phoneNumber);
//         formData.append('jobDesk', form.jobDesk);
//         formData.append('jobStatus', form.jobStatus);
//         formData.append('domicile', form.domicile);
//         formData.append('workPlace', form.workPlace);
//         formData.append('description', form.description);
//         formData.append('instagram', form.instagram);
//         formData.append('github', form.github);
//         formData.append('gitlab', form.gitlab);
//         formData.append('linkedin', form.linkedin);

//         // DATA EXPERIENCE
//         form.experience.map((item) => {
//           formData.append('position', item.position);
//           formData.append('company', item.company);
//           formData.append('start_date', item.start_date);
//           formData.append('end_date', item.end_date);
//           formData.append('description', item.description);
//           formData.append('image', item.image);
//         });

//         // DATA PORTOFOLIO
//         form.portofolio.map((item) => {
//           formData.append('app_name', item.app_name);
//           formData.append('link_repository', item.link_repository);
//           formData.append('type_portofolio', item.typePortofolio);
//           formData.append('image', item.image);
//         });

//         updateUser(form)
//           .then((res) => {
//             Swal.fire({
//               title: 'Success!',
//               text: res.message,
//               icon: 'success',
//             }).then(() => {
//               window.location.reload();
//             });
//           })
//           .catch((err) => {
//             if (err.response.data.code === 422) {
//               const errors = err.response.data.error;
//               errors.map((e) => toastr(e, 'error'));
//             } else {
//               Swal.fire({
//                 title: 'Error!',
//                 text: err.response.data.message,
//                 icon: 'error',
//               });
//             }
//           })
//           .finally(() => {
//             setEdit(false);
//             handleReset();
//           });
//       } catch (err) {
//         alert(err.message);
//       }
//     }
//   };

//   return (
//     <>
//       <Header title="Edit Profile Page" />

//       <section className={`${styles.edit__profile} mb-0 position-relative`}>
//         <PurpleBackground className={styles.edit__decoration} />
//         <div className="container">
//           <div className={`row ${styles.card__padding}`}>
//             {!error ? (
//               <>
//                 {data ? (
//                   <>
//                     <div className="col-12 col-md-4">
//                       <Card className={styles.card__profile}>
//                         <div
//                           className={`${styles.card__image} d-flex flex-column justify-content-center align-items-center`}
//                         >
//                           <Image
//                             srcImage={`${
//                               data.user.photo
//                                 ? `${API_URL}uploads/worker/${data.user.photo}`
//                                 : `${API_URL}uploads/worker/default.png`
//                             }`}
//                             altImage={data.user.name}
//                             imageClass="img-cover rounded-circle"
//                             imageWidth={150}
//                             imageHeight={150}
//                           />
//                           <div className="d-flex align-items-center justify-content-center">
//                             <img
//                               src="/icons/icon-pencil.svg"
//                               alt="Icon"
//                               width={18}
//                               height={18}
//                             />
//                             {loading ? (
//                               <button
//                                 className={`btn ${styles.btn__edit}`}
//                                 disabled
//                               >
//                                 <span
//                                   className="spinner-border spinner-border-sm"
//                                   role="status"
//                                   aria-hidden="true"
//                                 />
//                               </button>
//                             ) : (
//                               <button
//                                 className={`btn ${styles.btn__edit}`}
//                                 onClick={handleClick}
//                               >
//                                 Edit
//                               </button>
//                             )}

//                             <input
//                               type="file"
//                               ref={hiddenFileInput}
//                               onChange={handleImage}
//                               style={{ display: 'none' }}
//                             />
//                           </div>
//                         </div>

//                         {data.user.name ? (
//                           <h2 className={styles.profile__name}>
//                             {data.user.name}
//                           </h2>
//                         ) : (
//                           <h2 className={styles.profile__name}>Your Name</h2>
//                         )}

//                         {data.user.job_desk ? (
//                           <h6 className={styles.profile__job}>
//                             {data.user.job_desk}
//                           </h6>
//                         ) : (
//                           <h6 className={styles.profile__job}>Your Job Desk</h6>
//                         )}

//                         {data.user.domicile ? (
//                           <div className={styles.profile__location}>
//                             <img
//                               src="/icons/icon-location.svg"
//                               alt="Icon"
//                               width={15}
//                               height={15}
//                             />
//                             <span>{data.user.domicile}</span>
//                           </div>
//                         ) : (
//                           <div className={styles.profile__location}>
//                             <img
//                               src="/icons/icon-location.svg"
//                               alt="Icon"
//                               width={15}
//                               height={15}
//                             />
//                             <span>Your Domicile</span>
//                           </div>
//                         )}

//                         {data.user.job_status ? (
//                           <p className={`${styles.profile__type} mt-2`}>
//                             {data.user.job_status}
//                           </p>
//                         ) : (
//                           <p className={`${styles.profile__type} mt-2`}>
//                             Your Job Status
//                           </p>
//                         )}
//                       </Card>
//                       <div
//                         className="d-flex flex-column"
//                         style={{ marginBottom: '50px' }}
//                       >
//                         {edit ? (
//                           <button className={`${styles.button__main}`} disabled>
//                             <span
//                               className="spinner-border spinner-border-sm"
//                               role="status"
//                               aria-hidden="true"
//                             />
//                           </button>
//                         ) : (
//                           <Button
//                             className={`${styles.button__main}`}
//                             onClick={handleSubmit}
//                           >
//                             Simpan
//                           </Button>
//                         )}
//                         <Button
//                           className={`${styles.button__secondary} mt-3`}
//                           onClick={handleReset}
//                         >
//                           Batal
//                         </Button>
//                       </div>
//                     </div>
//                     <div className="col-12 col-md-8 col-lg-8">
//                       <Card className={styles.card__profile}>
//                         <div className={styles.content__title}>
//                           <h5 className={styles.content__heading}>Data diri</h5>
//                           <hr />
//                         </div>

//                         <div className={`${styles.line} w-100`} />

//                         <form className={styles.content__form}>
//                           <div
//                             className={`form-group position-relative ${styles.form__input}`}
//                           >
//                             <label htmlFor="name">Nama Lengkap</label>
//                             <FormInput
//                               placeholder="Masukan nama lengkap"
//                               id="name"
//                               value={form.name}
//                               onChange={handleInput}
//                             />
//                           </div>
//                           <div
//                             className={`form-group position-relative ${styles.form__input}`}
//                           >
//                             <label htmlFor="email">Email</label>
//                             <FormInput
//                               placeholder="Masukan email"
//                               type="email"
//                               id="email"
//                               value={form.email}
//                               onChange={handleInput}
//                             />
//                           </div>
//                           <div
//                             className={`form-group position-relative ${styles.form__input}`}
//                           >
//                             <label htmlFor="phoneNumber">Nomor Telepon</label>
//                             <FormInput
//                               placeholder="Masukan nomor telepon"
//                               id="phoneNumber"
//                               value={form.phoneNumber}
//                               onChange={handleInput}
//                             />
//                           </div>
//                           <div
//                             className={`form-group position-relative ${styles.form__input}`}
//                           >
//                             <label htmlFor="jobDesk">Job Desk</label>
//                             <FormInput
//                               placeholder="Masukan job desk"
//                               id="jobDesk"
//                               value={form.jobDesk}
//                               onChange={handleInput}
//                             />
//                           </div>
//                           <div
//                             className={`form-group position-relative ${styles.form__input}`}
//                           >
//                             <label htmlFor="jobStatus">Job Status</label>
//                             <FormInput
//                               placeholder="Masukan job status"
//                               id="jobStatus"
//                               value={form.jobStatus}
//                               onChange={handleInput}
//                             />
//                           </div>
//                           <div
//                             className={`form-group position-relative ${styles.form__input}`}
//                           >
//                             <label htmlFor="domicile">Domisili</label>
//                             <FormInput
//                               placeholder="Masukan domisili"
//                               id="domicile"
//                               value={form.domicile}
//                               onChange={handleInput}
//                             />
//                           </div>
//                           <div
//                             className={`form-group position-relative ${styles.form__input}`}
//                           >
//                             <label htmlFor="workPlace">Tempat kerja</label>
//                             <FormInput
//                               placeholder="Masukan tempat kerja"
//                               id="workPlace"
//                               value={form.workPlace}
//                               onChange={handleInput}
//                             />
//                           </div>
//                           <div
//                             className={`form-group position-relative d-flex flex-column ${styles.form__input}`}
//                           >
//                             <label htmlFor="description">
//                               Deskripsi singkat
//                             </label>
//                             <textarea
//                               placeholder="Tuliskan deskripsi singkat"
//                               id="description"
//                               value={form.description}
//                               onChange={handleInput}
//                             />
//                           </div>
//                           <div
//                             className={`form-group position-relative mt-5 ${styles.form__input}`}
//                           >
//                             <label htmlFor="instagram">Instagram</label>
//                             <FormInput
//                               placeholder="Masukan instagram"
//                               id="instagram"
//                               value={form.instagram}
//                               onChange={handleInput}
//                             />
//                           </div>
//                           <div
//                             className={`form-group position-relative ${styles.form__input}`}
//                           >
//                             <label htmlFor="github">Github</label>
//                             <FormInput
//                               placeholder="Masukan github"
//                               id="github"
//                               value={form.github}
//                               onChange={handleInput}
//                             />
//                           </div>
//                           <div
//                             className={`form-group position-relative ${styles.form__input}`}
//                           >
//                             <label htmlFor="gitlab">Gitlab</label>
//                             <FormInput
//                               placeholder="Masukan gitlab"
//                               id="gitlab"
//                               value={form.gitlab}
//                               onChange={handleInput}
//                             />
//                           </div>
//                           <div
//                             className={`form-group position-relative ${styles.form__input}`}
//                           >
//                             <label htmlFor="linkedin">Linkedin</label>
//                             <FormInput
//                               placeholder="Masukan linkedin"
//                               id="linkedin"
//                               value={form.linkedin}
//                               onChange={handleInput}
//                             />
//                           </div>
//                         </form>
//                       </Card>

//                       <Card className={styles.card__profile}>
//                         <div className={styles.content__title}>
//                           <h5 className={styles.content__heading}>Skill</h5>
//                           <hr />
//                         </div>
//                         <div className="position-relative">
//                           <CreatableSelect
//                             isMulti
//                             onChange={(e) => {
//                               setForm({ ...form, skill: e });
//                             }}
//                           />
//                         </div>
//                       </Card>

//                       <Card className={styles.card__profile}>
//                         <div className={styles.content__title}>
//                           <h5 className={styles.content__heading}>
//                             Pengalaman Kerja
//                           </h5>
//                           <hr />
//                         </div>
//                         {form.experience.map((item, index) => (
//                           <div key={index}>
//                             <div className="row">
//                               <div className="col-6">
//                                 <div
//                                   className={`form-group position-relative ${styles.form__input}`}
//                                 >
//                                   <label htmlFor="position">Posisi</label>
//                                   <FormInput
//                                     placeholder="Masukan posisi"
//                                     id="position"
//                                     value={item.position}
//                                     onChange={(e) => handleInputExp(e, index)}
//                                   />
//                                 </div>
//                               </div>
//                               <div className="col-6">
//                                 <div
//                                   className={`form-group position-relative ${styles.form__input}`}
//                                 >
//                                   <label htmlFor="company">
//                                     Nama perusahaan
//                                   </label>
//                                   <FormInput
//                                     placeholder="Masukan nama perusahaan"
//                                     id="company"
//                                     value={item.company}
//                                     onChange={(e) => handleInputExp(e, index)}
//                                   />
//                                 </div>
//                               </div>
//                               <div className="col-6">
//                                 <div
//                                   className={`form-group position-relative ${styles.form__input}`}
//                                 >
//                                   <label htmlFor="start_date">
//                                     Tanggal Mulai
//                                   </label>
//                                   <FormInput
//                                     type="date"
//                                     id="start_date"
//                                     value={
//                                       item.start_date
//                                         ? moment(item.start_date).format(
//                                           'YYYY-MM-DD'
//                                         )
//                                         : ''
//                                     }
//                                     onChange={(e) => handleInputExp(e, index)}
//                                     max={new Date().toISOString().split('T')[0]}
//                                   />
//                                 </div>
//                               </div>
//                               <div className="col-6">
//                                 <div
//                                   className={`form-group position-relative ${styles.form__input}`}
//                                 >
//                                   <label htmlFor="endDate">
//                                     Tanggal Selesai
//                                   </label>
//                                   <FormInput
//                                     type="date"
//                                     id="end_date"
//                                     value={
//                                       item.end_date
//                                         ? moment(item.end_date).format(
//                                           'YYYY-MM-DD'
//                                         )
//                                         : ''
//                                     }
//                                     onChange={(e) => handleInputExp(e, index)}
//                                     max={new Date().toISOString().split('T')[0]}
//                                   />
//                                 </div>
//                               </div>
//                               <div className="col-12">
//                                 <div
//                                   className={`form-group position-relative d-flex flex-column ${styles.form__input}`}
//                                 >
//                                   <label htmlFor="description">
//                                     Deskripsi singkat
//                                   </label>
//                                   <textarea
//                                     placeholder="Tuliskan deskripsi singkat"
//                                     id="description"
//                                     value={item.description}
//                                     onChange={(e) => handleInputExp(e, index)}
//                                   />
//                                 </div>
//                               </div>
//                               <div className="col-12">
//                                 <div
//                                   className={`form-group position-relative ${styles.form__input}`}
//                                 >
//                                   <label htmlFor="endDate">Image</label>
//                                   <FormInput
//                                     type="file"
//                                     id="image"
//                                     onChange={(e) => handleInputExp(e, index)}
//                                   />
//                                 </div>
//                               </div>
//                             </div>
//                             {index ? (
//                               <Button
//                                 className={`${styles.btn__warning}`}
//                                 onClick={() => handleDeleteExp(index)}
//                               >
//                                 Hapus pengalaman kerja
//                               </Button>
//                             ) : (
//                               <></>
//                             )}
//                             <hr
//                               className="w-100"
//                               style={{ color: '#E2E5ED', height: 2 }}
//                             />
//                           </div>
//                         ))}
//                         <Button
//                           className={`${styles.btn__warning}`}
//                           onClick={handleAddExp}
//                         >
//                           Tambah pengalaman kerja
//                         </Button>
//                       </Card>

//                       <Card className={styles.card__profile}>
//                         <div className={styles.content__title}>
//                           <h5 className={styles.content__heading}>
//                             Portofolio
//                           </h5>
//                           <hr />
//                         </div>
//                         {form.portofolio.map((item, index) => (
//                           <div key={index}>
//                             <div
//                               className={`form-group position-relative ${styles.form__input}`}
//                               key={item.id}
//                             >
//                               <label htmlFor="appName">Nama aplikasi</label>
//                               <FormInput
//                                 placeholder="Masukan nama aplikasi"
//                                 id="appName"
//                                 value={item.app_ame}
//                                 onChange={(e) => handleInputPorto(e, index)}
//                               />
//                             </div>
//                             <div
//                               className={`form-group position-relative ${styles.form__input}`}
//                             >
//                               <label htmlFor="linkRepository">
//                                 Link repository
//                               </label>
//                               <FormInput
//                                 placeholder="Masukan link repository"
//                                 id="linkRepository"
//                                 value={item.link_repository}
//                                 onChange={(e) => handleInputPorto(e, index)}
//                               />
//                             </div>
//                             <div
//                               className={`form-group position-relative ${styles.form__input}`}
//                             >
//                               <label htmlFor="type">Type portofolio</label>
//                               <br />
//                               <div className="radio__container">
//                                 <ul className="radio__content">
//                                   <li className="radio__custom">
//                                     <input
//                                       type="radio"
//                                       id="type_portofolio"
//                                       name="type"
//                                       onChange={(e) => handleInputPorto(e, index)}
//                                       checked={item.type_portofolio === 0}
//                                     />
//                                     <label htmlFor="type_portofolio">
//                                       Aplikasi Mobile
//                                     </label>
//                                   </li>
//                                   <li className="radio__custom">
//                                     <input
//                                       type="radio"
//                                       id="type_portofolio"
//                                       name="type"
//                                       onChange={(e) => handleInputPorto(e, index)}
//                                       checked={item.type_portofolio === 1}
//                                     />
//                                     <label htmlFor="type_portofolio">
//                                       Aplikasi Web
//                                     </label>
//                                   </li>
//                                 </ul>
//                               </div>
//                             </div>
//                             <div
//                               className={`form-group position-relative ${styles.form__input}`}
//                             >
//                               <label htmlFor="endDate">Image</label>
//                               <FormInput
//                                 type="file"
//                                 id="image"
//                                 onChange={(e) => handleInputPorto(e.target.files[0], index)}
//                               />
//                             </div>
//                             {index ? (
//                               <Button
//                                 className={`${styles.btn__warning}`}
//                                 onClick={() => handleDeletePorto(index)}
//                               >
//                                 Hapus portofolio
//                               </Button>
//                             ) : (
//                               <></>
//                             )}
//                             <hr
//                               className="w-100"
//                               style={{ color: '#E2E5ED', height: 2 }}
//                             />
//                           </div>
//                         ))}
//                         <Button
//                           className={`${styles.btn__warning}`}
//                           onClick={handleAddPorto}
//                         >
//                           Tambah portofolio
//                         </Button>
//                       </Card>
//                     </div>
//                   </>
//                 ) : (
//                   <div>Pengguna Tidak Ditemukan</div>
//                 )}
//               </>
//             ) : (
//               <div>Error : {message}</div>
//             )}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// editUser.layout = 'mainLayout';

// export default editUser;
