import React from 'react';
import StartReview from '../star/start-review';

export default function FormInformation() {
  return (
    <div className="mt-10">
      <h5 className="text-black font-extrabold text-xl">Informasi Produk</h5>
      <p className="mt-6 font-semibold">Condition</p>
      <p className="text-primary font-semibold text-sm">New</p>
      <h6 className="mt-8 font-semibold text-lg">Description</h6>
      <p className="text-black text-sm font-medium mt-3 whitespace-pre-wrap break-words">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non magna rutrum, pellentesque augue eu, sagittis
        velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis
        in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat.
        Pellentesque a consequat mauris, vel suscipit ipsum. Donec ac mauris vitae diam commodo vehicula. Donec quam
        elit, sollicitudin eu nisl at, ornare suscipit magna. Donec non magna rutrum, pellentesque augue eu, sagittis
        velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis
        in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. In ultricies rutrum tempus. Mauris vel
        molestie orci.
      </p>
      <p className="text-black text-sm mt-6 whitespace-pre-wrap break-words">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non magna rutrum, pellentesque augue eu, sagittis
        velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis
        in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat.
      </p>
      <h5 className="text-black font-extrabold text-xl mt-8">Product review</h5>
      <StartReview />
    </div>
  );
}
