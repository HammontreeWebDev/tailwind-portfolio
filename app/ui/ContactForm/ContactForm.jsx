import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function ContactForm() {

    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const value = e.target.value;

        setFormValues((prevValues) => ({
            ...prevValues,
            [e.target.name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            formValues.firstName !== "" &&
            formValues.lastName !== "" &&
            formValues.email !== "" &&
            formValues.email.match(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/) &&
            formValues.phoneNumber !== "" &&
            formValues.message !== ""
        ) {
            try {
                const response = await (fetch('/api/sendEmail', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formValues),
                })
                );

                if (response.ok) {
                    alert('Email Sent')
                    console.log('Email Sent!')
                } else {
                    alert('Failed To Send Email')
                    console.error('Failed To Send Email')
                }
            } catch (error) {
                console.error('Failed to send email', error);
            }

            setFormValues({
                firstName: "",
                lastName: "",
                phoneNumber: "",
                email: "",
                message: ""
            });
        } else {
            alert('Please Fill Out All Required Fields')
        }
    };

    return (
        <div className="relative isolate">
            <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
                            <svg
                                aria-hidden="true"
                                className="absolute inset-0 h-full w-full stroke-[var(--primary4)] [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                            >
                                <defs>
                                    <pattern
                                        x="100%"
                                        y={-1}
                                        id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                                        width={200}
                                        height={200}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <path d="M130 200V.5M.5 .5H200" fill="none" />
                                    </pattern>
                                </defs>
                                <svg x="100%" y={-1} className="overflow-visible fill-[var(--primary4)]">
                                    <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                                </svg>
                                <rect fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)" width="100%" height="100%" strokeWidth={0} />
                            </svg>
                            <div
                                aria-hidden="true"
                                className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
                            >
                                <div
                                    style={{
                                        clipPath:
                                            'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
                                    }}
                                    className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#7A3FFC] to-[#B83FFC] opacity-50"
                                />
                            </div>
                        </div>
                        <h2 className=" title-text text-pretty text-4xl font-semibold tracking-tight text-[var(--primary2)] sm:text-5xl">General Inquiries</h2>
                        <p className="mt-6 text-lg leading-8 text-white">
                            If you have general questions for me, feel free to use this form to send me an email.
                            <br />
                            <br />
                            Please allow 24-72 business hours while waiting for a response.
                        </p>
                        <dl className="mt-10 space-y-4 text-base leading-7 text-white">
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Email</span>
                                    <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                                </dt>
                                <dd>
                                    <a href="mailto:hello@example.com" className="hover:text-white">
                                        kaileb@hammontreefullstacksolutions.com
                                    </a>
                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Phone</span>
                                    <PhoneIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                                </dt>
                                <dd>
                                    <a href="mailto:hello@example.com" className="hover:text-white">
                                        Text/Call (407) 202-3227
                                    </a>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
                    <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-white">
                                    First name <span className='text-red-500'>*</span>
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                        value={formValues.firstName}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-white">
                                    Last name <span className='text-red-500'>*</span>
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                        value={formValues.lastName}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                                    Email <span className='text-red-500'>*</span>
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                        value={formValues.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="phoneNumber" className="block text-sm font-semibold leading-6 text-white">
                                    Phone number <span className='text-red-500'>*</span>
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        type="tel"
                                        autoComplete="tel"
                                        className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                        value={formValues.phoneNumber}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
                                    Message <span className='text-red-500'>*</span>
                                </label>
                                <div className="mt-2.5">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                        value={formValues.message}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex justify-end">
                            <button
                                type="submit"
                                className="rounded-md bg-[var(--primary5)] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                                Send message
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
