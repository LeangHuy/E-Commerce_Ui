// components/LocationSection.js
import React from 'react';

const LocationSection = () => {
    return (
        <section className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
                <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">Visit Our Location</h2>
                </div>
                <div className="mt-16 lg:mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="rounded-lg overflow-hidden">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.725150891427!2d104.92494149999999!3d11.5715504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951337a85874b%3A0x2d87e31e143a0647!2sPlaystation%20Game%20cambodia!5e0!3m2!1sen!2skh!4v1726476147250!5m2!1sen!2skh"
                                width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                        <div>
                            <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                                <div className="px-6 py-4">
                                    <h3 className="text-lg font-medium text-gray-900">Our Address</h3>
                                    <p className="mt-1 text-gray-600">Street118 សង្កាត់ ផ្សារចាស់ ខណ្ឌ ដូនពេញ</p>
                                </div>
                                <div className="border-t border-gray-200 px-6 py-4">
                                    <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                                    <p className="mt-1 text-gray-600">Monday - Saturday: 9am - 8pm</p>
                                    <p className="mt-1 text-gray-600">Sunday: 10am - 5pm</p>
                                </div>
                                <div className="border-t border-gray-200 px-6 py-4">
                                    <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                                    <p className="mt-1 text-gray-600">Facebook page : PlayStation Game Cambodia</p>
                                    <p className="mt-1 text-gray-600">Phone: +855 10 530 333</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default LocationSection;
