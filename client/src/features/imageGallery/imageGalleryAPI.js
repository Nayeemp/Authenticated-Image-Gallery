/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/prefer-default-export */
import { apiSlice } from '../api/apiSlice';

export const imageGalleryAPI = apiSlice.injectEndpoints({

  tagTypes: ['Images'],
  endpoints: (builder) => ({

    fetchImages: builder.query({
      query: () => ({ url: '/images/all' }),
      providesTags: ['Images']
    }),

    addImage: builder.mutation({
      query: (data) => ({
        url: '/images/upload',
        method: 'POST',
        body: data,
        formData: true
      }),
      invalidatesTags: ['Images']
    }),

    deleteImage: builder.mutation({
      query: (data) => ({
        url: `/images/single/${data}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Images']
    })
  })
});

export const { useFetchImagesQuery, useAddImageMutation, useDeleteImageMutation } = imageGalleryAPI;
