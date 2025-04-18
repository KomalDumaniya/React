import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const countryOptions = [
  { value: 'usa', label: 'USA' },
  { value: 'india', label: 'India' },
];

const stateOptions = {
  usa: [
    { value: 'california', label: 'California' },
    { value: 'texas', label: 'Texas' },
  ],
  india: [
    { value: 'maharashtra', label: 'Maharashtra' },
    { value: 'Gujarat', label: 'Gujarat' },
  ],
};

const hobbyOptions = ['Music', 'Dance', 'Other'];

const validationSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  description: yup.string().required('Description is required'),
  gender: yup.string().required('Gender is required'),
  dob: yup.date().required('Date of Birth is required'),
  country: yup.object({ value: yup.string().required(), label: yup.string().required(),}).nullable().required('Country is required'),
  state: yup.object({ value: yup.string().required(),label: yup.string().required(),}).nullable().required('State is required'),
  website: yup.string().url('Invalid URL').required('Website is required'),
  hobbies: yup.array().min(1, 'At least one hobby is required'),
});
 
const Form = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      description: '',
      gender: '',
      dob: '',
      country: null,
      state: null,
      website: '',
      hobbies: [],
    },
  });

  const selectedCountry = watch('country');

  const onSubmit = (data) => {
    console.log(data);
    alert('Form submitted successfully!');
    reset();
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-200 shadow-md rounded-md m-8">
      <h2 className="text-2xl font-semibold mb-4">Advanced Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <div>
          <label className="block font-medium">First Name</label>
          <input type="text" placeholder="Enter First Name" className="w-full p-2 border border-gray-300 rounded" {...register('firstName')} />
          <p className="text-red-500 text-sm">{errors.firstName?.message}</p>
        </div>

        <div>
          <label className="block font-medium">Last Name</label>
          <input type="text" placeholder="Enter Last Name" className="w-full p-2 border border-gray-300 rounded" {...register('lastName')} />
          <p className="text-red-500 text-sm">{errors.lastName?.message}</p>
        </div>

        <div>
          <label className="block font-medium">Email</label>
          <input type="email" placeholder="Enter Email-ID" className="w-full p-2 border border-gray-300 rounded" {...register('email')} />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>

        <div>
          <label className="block font-medium">Description</label>
          <textarea className="w-full p-2 border border-gray-300 rounded" {...register('description')} />
          <p className="text-red-500 text-sm">{errors.description?.message}</p>
        </div>

        <div>
          <label className="block font-medium">Gender</label>
          <div className="flex space-x-4">
            <label>
              <input type="radio" value="Male" {...register('gender')} className="mr-1" />
              Male
            </label>
            <label>
              <input type="radio" value="Female" {...register('gender')} className="mr-1" />
              Female
            </label>
          </div>
          <p className="text-red-500 text-sm">{errors.gender?.message}</p>
        </div>

        <div>
          <label className="block font-medium">Date of Birth</label>
          <input type="date" className="w-full p-2 border border-gray-300 rounded" {...register('dob')} />
          <p className="text-red-500 text-sm">{errors.dob?.message}</p>
        </div>

        <div>
          <label className="block font-medium">Country</label>
          <Controller name="country" control={control} render={({ field }) => (<Select {...field} options={countryOptions} placeholder="Select Country" />)} />
          <p className="text-red-500 text-sm">{errors.country?.message}</p>
        </div>

        <div>
          <label className="block font-medium">State</label>
          <Controller name="state" control={control} render={({ field }) => (<Select {...field} options={selectedCountry ? stateOptions[selectedCountry.value] : []} placeholder="Select State" />)} />
          <p className="text-red-500 text-sm">{errors.state?.message}</p>
        </div>

        <div>
          <label className="block font-medium">Website</label>
          <input type="text" placeholder="Enter Your Website" {...register('website')} className="w-full p-2 border border-gray-300 rounded" />
          <p className="text-red-500 text-sm">{errors.website?.message}</p>
        </div>

        <div>
          <label className="block font-medium">Hobbies</label>
          <div className="flex space-x-4">
            {hobbyOptions.map((hobby) => (
              <label key={hobby}>
                <input type="checkbox" value={hobby} {...register('hobbies')} className="mr-1" />
                {hobby}
              </label>
            ))}
          </div>
          <p className="text-red-500 text-sm">{errors.hobbies?.message}</p>
        </div>

        <div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Submit
          </button>
        </div>

      </form>
    </div>
  );
}


export default Form;