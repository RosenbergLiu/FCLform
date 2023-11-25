'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import {processEnv} from "@next/env";

export default function BatchForm() {
  const router = useRouter()

  const [model_name, setModelName] = useState('')
  const [submit_date, setSubmitDate] = useState('')
  const [quantity, setQuantity] = useState('')
  const [license_level, setLicenseLevel] = useState('')
  const [comment, setComment] = useState('')

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      const body = { model_name, submit_date, quantity, license_level, comment }
      const result = await fetch(`/api/batch`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      setModelName('');
      setSubmitDate('');
      setQuantity('');
      setLicenseLevel('');
      setComment('');

      router.push('/');

      console.log(result);
    } catch (error) {
      console.error(error)
    }
  }

  return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px] ">
            <div className="px-6 py-12 shadow sm:rounded-lg sm:px-12 bg-black border-4 border-red-500">
              <form className="space-y-6 " onSubmit={submitData}>
                <div className="mt-2">
                  <p className="text-2xl text-white">Batch Form</p>
                </div>
                <div className="mt-2" id="model-selector">
                  <select
                      id="model"
                      name="model"
                      className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"

                      required
                      value={model_name}
                      onChange={(e) => setModelName(e.target.value)}
                  >
                    <option value="" disabled>Model</option>
                    <option>Model 1</option>
                    <option>Model 2</option>
                    <option>Model 3</option>
                  </select>
                </div>
                <div className="mt-2" id="date-selector">
                  <input
                      id="password"
                      name="password"
                      type="date"
                      required
                      value={submit_date}
                      onChange={(e) => setSubmitDate(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>

                <div className="mt-2">
                  <input
                      id="quantity"
                      name="quantity"
                      type="number"
                      required
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Quantity"

                  />
                </div>

                <div className="mt-2" id="level-selector">
                  <select
                      id="level"
                      name="level"
                      className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"

                      required
                      value={license_level}
                      onChange={(e) => setLicenseLevel(e.target.value)}
                  >
                    <option value="" disabled>License Level</option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                  </select>
                </div>

                <div className="mt-2">
                  <input
                      id="comment"
                      name="comment"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Comment (Optional)"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                  />
                </div>

                <div>
                  <button
                      type="submit"
                      style={{ backgroundColor: '#6A5739' }}
                      className="flex w-full justify-center rounded-md bg-re-500 dark:bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
  )
}
