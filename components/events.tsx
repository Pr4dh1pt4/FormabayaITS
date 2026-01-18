'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, CheckCircle, Calendar, MapPin, Clock, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

export default function Events() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const faqs = [
        {
            question: 'Berapa biaya pendaftaran Try Out nya?',
            answer: 'Harga pendaftaran Try Out Sepuluh Nopember mulai dari 30.000 untuk batch 2. Selain itu, ada paket bundling untuk pendaftar lebih dari satu orang. Silahkan hubungi sosial media kami untuk mengetahui kebih lanjut detail harganya.',
        },
        {
            question: 'Gimana cara daftar Try Out nya?',
            answer: 'Untuk pendaftaran Try Out Sepuluh Nopember, kalian bisa langsung masuk ke website ini lho its dengan menekan tombol link pendaftaran di atas.',
        },
        {
            question: 'Apa hadiah Try Out nya?',
            answer: 'Kalian bisa mendapatkan Freepass masuk ITS untuk juara 1 & 2 TOSN. Selain itu, kalian juga akan mendapatkan hadiah uang tunai untuk juara tiga besar.',
        },
        {
            question: 'Apa aja fasilitas yang didapatkan?',
            answer: 'Untuk fasilitas yang didapatkan pastinya soal - soal try out beserta pembahasannya. Selain itu, kalian juga akan mendapatkan talkshow dari pemateri yang keren dan juga konsumsi setelah selesai try out.',
        },
    ];

    const testimonials = [
        {
            name: 'Reza Rifqi',
            role: 'Participant 2024',
            quote: 'Try Out nya sangat bermanfaat sebagai bekal seleksi untuk masuk ke ITS, karena ada pembahasan soal-soal Try Out nya yang bermanfaat buat pembelajaran seleksi masuk ITS nya.',
            avatar: '👩',
            bg: 'bg-blue-100'
        },
        {
            name: 'Putra Nugraha',
            role: 'Participant 2024',
            quote: 'Awalnya bingung harus mulai belajar dari mana untuk persiapan tes mandiri. Untungnya pernah ikut Try Out Sepuluh Nopember. Soal-soalnya bener-bener berbobot dan level kesulitannya mirip banget sama ujian aslinya.',
            avatar: '👨',
            bg: 'bg-green-100'
        },
        {
            name: 'Bintang Catur',
            role: 'Participant 2024',
            quote: 'Gak nyesel ikut Try Out Sepuluh Nopember! Soal-soalnya up-to-date, sistemnya user-friendly, dan harganya terjangkau banget buat kantong pelajar. Level up banget buat persiapan masuk ITS!',
            avatar: '🧕',
            bg: 'bg-orange-100'
        },
    ];

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="events" className="section-padding gradient-white-navy relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-[#5D1F1E] mb-6">
                        Formabaya<span className="text-[#CB6F4A]"> x Ini Lho ITS 2026!</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        FORMABAYA X INI LHO ITS adalah kegiatan untuk memperkenalkan ITS secara menyeluruh baik dari segi akademis, non-akademis, serta lingkungan di dalamnya kepada masyarakat umum, khususnya siswa-siswi SMA/K sederajat di Blitar Raya.
                    </p>
                </motion.div>

                {/* Featured Event */}
                <div className="w-fit mx-auto px-4 py-2 bg-[#CB6F4A]/10 text-[#CB6F4A] rounded-full font-bold text-sm mb-12">
                    Formabaya X Ini Lho ITS! 2026
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl group"
                    >
                        <Image
                            src="/TOSN.jpeg"
                            alt="Upcoming Event"
                            fill
                            className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl group"
                        />
                        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur rounded-2xl p-4 text-center shadow-lg">
                            <div className="text-sm font-bold text-[#CB6F4A] uppercase tracking-wide">JAN</div>
                            <div className="text-3xl font-bold text-[#5D1F1E]">25</div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >


                        <h3 className="text-4xl font-bold text-[#5D1F1E]">Try Out Sepuluh Nopember</h3>

                        <div className="space-y-4 text-lg text-gray-600">
                            <p>
                                TOSN hadir dengan tujuan untuk menumbuhkan rasa semangat pendidikan perguruan tinggi ke siswa SMA sederajat di Indonesia. Pelaksanaan Try Out akan menyesuaikan program Tes Seleksi Mandiri ITS / TKA SMITS dengan benefit pemenang berupa freepass masuk ITS.
                            </p>

                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <div className="flex items-center gap-3 text-[#5D1F1E] font-medium">
                                    <Clock className="w-5 h-5 text-[#CB6F4A]" />
                                    Minggu, 25 Januari 2026
                                </div>
                                <div className="flex items-center gap-3 text-[#5D1F1E] font-medium">
                                    <MapPin className="w-5 h-5 text-[#CB6F4A]" />
                                    SMAN 1 TALUN
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                            <h4 className="text-xl font-bold text-[#5D1F1E] mb-4">Benefits</h4>
                            <ul className="space-y-3">
                                {[
                                    'FreePass Masuk ITS',
                                    'Sertifikat',
                                    'Pembahasan Soal Try Out',
                                    'Biaya Transport bagi Finalis',
                                    'Hadiah Uang Tunai',
                                    'Talkshow',
                                    'Konsumsi',
                                ].map((step, index) => (
                                    <li key={index} className="flex items-center gap-3 text-gray-700">
                                        <CheckCircle className="w-5 h-5 text-[#CB6F4A] flex-shrink-0" />
                                        <span>{step}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://inilho.its.ac.id/dashboard/events"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-8 py-4 bg-[#CB6F4A] hover:bg-[#AB4F41] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 inline-block text-center"
                            >
                                Link Pendaftaran
                            </a>
                            <a
                                href="https://drive.google.com/file/d/1_mQ21pnCmGRCCVJ4kdOKIrLUoJ3o2820/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-[#CB6F4A] text-[#CB6F4A] hover:bg-[#CB6F4A] hover:text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                            >
                                <BookOpen className="w-5 h-5" />
                                Guidebook
                            </a>
                            <a
                                href="https://maps.app.goo.gl/uj7G248dSmj3ZVz29"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-[#CB6F4A] text-[#CB6F4A] hover:bg-[#CB6F4A] hover:text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                            >
                                <MapPin className="w-5 h-5" />
                                Venue
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* FAQ Section */}
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h3 className="text-4xl font-bold text-[#5D1F1E]">Pertanyaan yang sering ditanyakan</h3>
                    </motion.div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
                                >
                                    <span className="text-lg font-bold text-[#5D1F1E] text-left">{faq.question}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-[#CB6F4A] transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {openFaq === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-8 pb-6 pt-0 text-gray-600 leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Testimonials */}
                <div className="text-center">
                    <h3 className="text-4xl font-bold text-[#5D1F1E] mb-12">Testimoni</h3>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-16 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full -mr-32 -mt-32 opacity-50" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-50 rounded-full -ml-24 -mb-24 opacity-50" />

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentTestimonial}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="relative z-10"
                                >
                                    <div className={`w-20 h-20 mx-auto ${testimonials[currentTestimonial].bg} rounded-full flex items-center justify-center text-4xl mb-8 shadow-inner`}>
                                        {testimonials[currentTestimonial].avatar}
                                    </div>

                                    <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 mb-8 leading-relaxed">
                                        "{testimonials[currentTestimonial].quote}"
                                    </blockquote>

                                    <div>
                                        <div className="font-bold text-xl text-[#CB6F4A]">
                                            {testimonials[currentTestimonial].name}
                                        </div>
                                        <div className="text-gray-500 font-medium mt-1">
                                            {testimonials[currentTestimonial].role}
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Navigation Buttons */}
                            <button
                                onClick={prevTestimonial}
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 hover:bg-white text-[#CB6F4A] shadow-lg transition-all duration-300 hover:scale-110 z-20"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={nextTestimonial}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 hover:bg-white text-[#CB6F4A] shadow-lg transition-all duration-300 hover:scale-110 z-20"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>

                            {/* Controls */}
                            <div className="flex justify-center mt-12 gap-3">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentTestimonial(index)}
                                        className={`h-2 rounded-full transition-all duration-300 ${currentTestimonial === index ? 'w-8 bg-[#CB6F4A]' : 'w-2 bg-gray-200'
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
