import { Dialog } from '@headlessui/react';
import Image from 'next/image';

export default function Modal({ title, content, leftButton, rightButton, onClose, imagesrc, imagealt, href }) {
  return (
    <Dialog open={true} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-canvas/80 backdrop-blur-sm" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <Dialog.Panel className="card-surface relative w-full transform overflow-hidden px-6 pb-6 pt-6 text-left sm:my-8 sm:max-w-md sm:p-8">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl border border-canvas-border bg-canvas-muted">
              <Image src={imagesrc} alt={imagealt} height={40} width={40} />
            </div>
            <div className="mt-5 text-center">
              <Dialog.Title as="h3" className="font-display text-lg font-semibold text-ink">
                {title}
              </Dialog.Title>
              <p className="mt-2 text-sm text-ink-muted">{content}</p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={onClose}
                className="btn-ghost rounded-lg px-4 py-2.5 text-sm"
              >
                {leftButton}
              </button>
              <a
                className="btn-accent rounded-lg px-4 py-2.5 text-center text-sm"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
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
