import { Dialog } from '@headlessui/react';
import Image from 'next/image';

export default function Modal({ title, content, leftButton, rightButton, onClose, imagesrc, imagealt, href }) {
    return (
        <Dialog open={true} onClose={onClose} className="relative z-10">
            <div className="fixed inset-0 bg-[var(--p4-50)] bg-opacity-75" />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-black px-4 pb-4 pt-5 text-left shadow-xl sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                        <div>
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full">
                                <Image
                                    src={imagesrc}
                                    alt={imagealt}
                                    height={50}
                                    width={50}
                                />
                            </div>
                            <div className="mt-3 text-center sm:mt-5">
                                <Dialog.Title as="h3" className="title-text text-base font-semibold leading-6 text-[var(--primary2)]">
                                    {title}
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-sm text-white">{content}</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                            <button
                                type="button"
                                onClick={onClose}
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
                            >
                                {leftButton}
                            </button>
                            <a
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-[var(--primary5)] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[var(--primary4)]"
                                href={href}
                            >
                                {rightButton}
                            </a>
                        </div>
                    </Dialog.Panel>
                </div>
            </div>
        </Dialog>
    );
}
