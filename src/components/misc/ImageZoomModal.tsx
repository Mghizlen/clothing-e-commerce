import React from 'react';
import { Modal } from '../ui/Modal';
import { Icon } from '../ui/Icon';

interface ImageZoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  alt: string;
}

export function ImageZoomModal({ isOpen, onClose, imageSrc, alt }: ImageZoomModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full aspect-[4/5] relative">
        <img
          src={imageSrc}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
    </Modal>
  );
}
