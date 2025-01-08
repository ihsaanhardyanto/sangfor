import { useForm } from '@inertiajs/react';

import { Head, Link } from '@inertiajs/react';

import Navbar from '../Components/ui/Navbar';

import Footer from '../Components/ui/Footer';

export default function Welcome() {
    const { data, setData, post, processing, errors } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        job_title: '',
        company_name: '',
        industry: '',
        phone_number: '',
        agree_to_contact: false,
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('submit.form'), {
            onSuccess: () => {},
            onError: (errors) => {
                console.error(errors);
            },
        });
    };

    return (
        <>
            <Head title="Landing Page" />
            <Navbar />
            <main className="flex flex-col">
                {/* First Section - Hero */}
                <section className="relative flex min-h-screen items-center px-4 py-12 sm:px-6 lg:px-8">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: "url('/assets/landing.jpeg')",
                            transform: 'scaleX(-1)',
                        }}
                    ></div>
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                'linear-gradient(90deg, rgba(0, 0, 142, 0.75) 0%, rgba(4, 190, 2, 0.75) 100%)',
                        }}
                    ></div>
                    <div className="relative z-10 ml-20 w-full max-w-4xl">
                        <div className="space-y-6 text-left">
                            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                                Cybersecurity Made Simple
                                <span className="mt-2 block">
                                    with Sangfor Cyber Command
                                </span>
                            </h1>

                            <p className="max-w-2xl text-base text-white sm:text-lg md:text-xl">
                                Simplify your cybersecurity with Sangfor Cyber
                                Command's user-friendly interface and
                                comprehensive threat protection.
                            </p>

                            <div className="mt-8">
                                <Link
                                    href="#second-section"
                                    className="inline-flex items-center rounded-lg bg-green-500 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-green-600 sm:text-lg"
                                >
                                    FREE TRIAL
                                    <svg
                                        className="ml-2 h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Second Section - About & Form */}
                <section className="relative min-h-screen" id="second-section">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: "url('/assets/landing2.jpeg')",
                            backgroundSize: 'cover',
                        }}
                    ></div>
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        }}
                    ></div>
                    <div className="relative z-10 py-20">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                                {/* About Content */}
                                <div className="space-y-6 px-16 pt-12">
                                    <h2 className="text-4xl font-bold text-[#293660]">
                                        About Sangfor Cyber Command
                                    </h2>
                                    <div className="space-y-4 text-gray-600">
                                        <p>
                                            Sangfor Cyber Command falls into
                                            Network Detection & Response (NDR)
                                            Solutions which is a comprehensive
                                            security management platform
                                            designed to protect businesses from
                                            cyber threats.
                                        </p>
                                        <p>
                                            It provides a range of security
                                            solutions such as threat detection,
                                            incident response, and compliance
                                            management. With Sangfor Cyber
                                            Command, organizations can monitor
                                            their network traffic, analyze
                                            security events, and respond to
                                            incidents quickly and efficiently.
                                        </p>
                                        <p>
                                            The platform uses advanced machine
                                            learning algorithms and big data
                                            analytics to identify and prevent
                                            cyber-attacks before they cause
                                            damage. It also offers a
                                            user-friendly dashboard that enables
                                            businesses to track their security
                                            posture in real-time and make
                                            informed decisions based on the
                                            insights provided.
                                        </p>
                                        <p>
                                            Overall, Sangfor Cyber Command is a
                                            powerful tool for businesses looking
                                            to strengthen their cybersecurity
                                            defenses and safeguard their assets
                                            from modern-day threats.
                                        </p>
                                    </div>
                                </div>

                                {/* Form */}
                                <div className="rounded-lg bg-white p-8 shadow-lg">
                                    <h3 className="mb-6 text-xl font-semibold text-[#293660]">
                                        Dapatkan Free Trial selama 1 bulan,
                                        <span className="mt-1 block text-base text-gray-500">
                                            analisa keamanan network anda dan
                                            lihat hasilnya!
                                        </span>
                                    </h3>
                                    <form
                                        onSubmit={handleSubmit}
                                        className="space-y-4"
                                    >
                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">
                                                    First Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
                                                    placeholder="First Name"
                                                    value={data.first_name}
                                                    onChange={(e) =>
                                                        setData(
                                                            'first_name',
                                                            e.target.value,
                                                        )
                                                    }
                                                />
                                                {errors.first_name && (
                                                    <div className="mt-1 text-sm text-red-500">
                                                        {errors.first_name}
                                                    </div>
                                                )}
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Last Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
                                                    placeholder="Last Name"
                                                    value={data.last_name}
                                                    onChange={(e) =>
                                                        setData(
                                                            'last_name',
                                                            e.target.value,
                                                        )
                                                    }
                                                />
                                                {errors.last_name && (
                                                    <div className="mt-1 text-sm text-red-500">
                                                        {errors.last_name}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Corporate Email *
                                            </label>
                                            <input
                                                type="email"
                                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
                                                placeholder="email@mail.com"
                                                value={data.email}
                                                onChange={(e) =>
                                                    setData(
                                                        'email',
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                            {errors.email && (
                                                <div className="mt-1 text-sm text-red-500">
                                                    {errors.email}
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Job Title *
                                            </label>
                                            <input
                                                type="text"
                                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
                                                placeholder="Your job"
                                                value={data.job_title}
                                                onChange={(e) =>
                                                    setData(
                                                        'job_title',
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                            {errors.job_title && (
                                                <div className="mt-1 text-sm text-red-500">
                                                    {errors.job_title}
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Company Name *
                                            </label>
                                            <input
                                                type="text"
                                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
                                                placeholder="Your company"
                                                value={data.company_name}
                                                onChange={(e) =>
                                                    setData(
                                                        'company_name',
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                            {errors.company_name && (
                                                <div className="mt-1 text-sm text-red-500">
                                                    {errors.company_name}
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Industry *
                                            </label>
                                            <select
                                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
                                                value={data.industry}
                                                onChange={(e) =>
                                                    setData(
                                                        'industry',
                                                        e.target.value,
                                                    )
                                                }
                                            >
                                                <option value="">
                                                    Select Industry
                                                </option>
                                                <option value="technology">
                                                    Technology
                                                </option>
                                                <option value="finance">
                                                    Finance
                                                </option>
                                                <option value="healthcare">
                                                    Healthcare
                                                </option>
                                                <option value="manufacturing">
                                                    Manufacturing
                                                </option>
                                            </select>
                                            {errors.industry && (
                                                <div className="mt-1 text-sm text-red-500">
                                                    {errors.industry}
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
                                                placeholder="Your number"
                                                value={data.phone_number}
                                                onChange={(e) =>
                                                    setData(
                                                        'phone_number',
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                            {errors.phone_number && (
                                                <div className="mt-1 text-sm text-red-500">
                                                    {errors.phone_number}
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-green-500 focus:ring-green-500"
                                                checked={data.agree_to_contact}
                                                onChange={(e) =>
                                                    setData(
                                                        'agree_to_contact',
                                                        e.target.checked,
                                                    )
                                                }
                                            />
                                            <label className="ml-2 text-sm text-gray-600">
                                                click this box to agree to be
                                                contacted by our team and get
                                                great deals on Sangfor for
                                                Helios!
                                            </label>
                                        </div>
                                        {errors.agree_to_contact && (
                                            <div className="text-sm text-red-500">
                                                {errors.agree_to_contact}
                                            </div>
                                        )}
                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="w-full rounded-md bg-green-500 px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                        >
                                            {processing ? 'SENDING...' : 'SEND'}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Third Section - Advantages */}
                <section className="relative overflow-hidden py-20">
                    {/* Background Image Container */}
                    <div
                        className="absolute inset-0 scale-150 transform bg-center bg-no-repeat transition-transform duration-300"
                        style={{
                            backgroundImage: "url('/assets/landing3.jpeg')",
                            backgroundAttachment: 'fixed',
                            backgroundSize: 'cover',
                        }}
                    ></div>
                    {/* Overlay untuk memastikan text tetap terbaca */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                'linear-gradient(90deg, rgba(0, 0, 142, 0.75) 0%, rgba(4, 190, 2, 0.75) 100%)',
                        }}
                    ></div>

                    {/* Content */}
                    <div className="container relative z-10 mx-auto px-4">
                        <div className="mb-16 text-center">
                            <h2 className="mb-4 text-5xl font-bold text-white">
                                Sangfor Cyber Command Advantages
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            {/* Advantage 1 */}
                            <div className="rounded-lg bg-white p-8">
                                <div className="flex flex-col items-center text-center">
                                    <img
                                        src="/assets/adv1.png"
                                        alt="Advanced Threat Detection"
                                        className="mb-6 h-32 w-32"
                                    />
                                    <h3 className="mb-4 text-xl font-bold text-gray-900">
                                        Advanced Threat Detection
                                    </h3>
                                    <p className="text-gray-600">
                                        Sangfor Cyber Command offers advanced
                                        threat detection capabilities that can
                                        help users identify and respond to
                                        potential security threats in real-time.
                                        This includes identifying and blocking
                                        malware, ransomware, and other types of
                                        cyber threats.
                                    </p>
                                </div>
                            </div>

                            {/* Advantage 2 */}
                            <div className="rounded-lg bg-white p-8">
                                <div className="flex flex-col items-center text-center">
                                    <img
                                        src="/assets/adv2.png"
                                        alt="Network Visibility"
                                        className="mb-6 h-32 w-32"
                                    />
                                    <h3 className="mb-4 text-xl font-bold text-gray-900">
                                        Network Visibility and Control
                                    </h3>
                                    <p className="text-gray-600">
                                        Sangfor Cyber Command provides users
                                        with visibility and control over their
                                        network infrastructure. This includes
                                        monitoring network traffic, controlling
                                        access to resources, and managing
                                        network policies.
                                    </p>
                                </div>
                            </div>

                            {/* Advantage 3 */}
                            <div className="rounded-lg bg-white p-8">
                                <div className="flex flex-col items-center text-center">
                                    <img
                                        src="/assets/adv3.png"
                                        alt="Cloud Security"
                                        className="mb-6 h-32 w-32"
                                    />
                                    <h3 className="mb-4 text-xl font-bold text-gray-900">
                                        Cloud Security
                                    </h3>
                                    <p className="text-gray-600">
                                        Sangfor Cyber Command offers cloud
                                        security solutions that can help users
                                        secure their cloud-based applications
                                        and infrastructure. This includes
                                        protecting against cloud-specific
                                        threats like data breaches, account
                                        hijacking, and insider threats.
                                    </p>
                                </div>
                            </div>

                            {/* Advantage 4 */}
                            <div className="rounded-lg bg-white p-8">
                                <div className="flex flex-col items-center text-center">
                                    <img
                                        src="/assets/adv4.png"
                                        alt="Security Management"
                                        className="mb-6 h-32 w-32"
                                    />
                                    <h3 className="mb-4 text-xl font-bold text-gray-900">
                                        Comprehensive Security Management
                                    </h3>
                                    <p className="text-gray-600">
                                        Sangfor Cyber Command provides users
                                        with a comprehensive security management
                                        platform that can help them manage and
                                        monitor their entire security
                                        infrastructure from a single console.
                                        This includes managing security
                                        policies, tracking security events, and
                                        generating reports.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Fourth Section - Features */}
                <section className="relative overflow-hidden py-20">
                    {/* Background Image Container */}
                    <div
                        className="absolute inset-0 scale-110 transform bg-center bg-no-repeat transition-transform duration-300"
                        style={{
                            backgroundImage: "url('/assets/landing4.jpeg')",
                            backgroundAttachment: 'fixed',
                            backgroundSize: 'cover',
                        }}
                    ></div>

                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        }}
                    ></div>
                    <div className="container relative z-10 mx-auto px-4">
                        <div className="mb-16 text-center">
                            <h2 className="mb-4 text-5xl font-extrabold text-[#1a237e]">
                                Sangfor Cyber Command Features
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
                            {/* Feature 1 */}
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src="/assets/feat1.png"
                                    alt="Threat Intelligence"
                                    className="mb-6 h-32 w-32"
                                />
                                <h3 className="mb-4 text-xl font-bold text-gray-900">
                                    Threat Intelligence
                                </h3>
                                <p className="text-gray-600">
                                    Advanced AI algorithms and machine learning
                                    provide comprehensive threat intelligence to
                                    stay ahead of the latest cyber threats.
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src="/assets/feat2.png"
                                    alt="Real-Time Detections"
                                    className="mb-6 h-32 w-32"
                                />
                                <h3 className="mb-4 text-xl font-bold text-gray-900">
                                    Real-Time Detections
                                </h3>
                                <p className="text-gray-600">
                                    Real-time alert system provides instant
                                    notification of potential security
                                    incidents.
                                </p>
                            </div>

                            {/* Feature 3 */}
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src="/assets/feat3.png"
                                    alt="Threats Investigation"
                                    className="mb-6 h-32 w-32"
                                />
                                <h3 className="mb-4 text-xl font-bold text-gray-900">
                                    Threats Investigation
                                </h3>
                                <p className="text-gray-600">
                                    In-depth Threat investigation capabilities
                                    identify the root cause of security
                                    incidents and take appropriate action to
                                    prevent future occurrences.
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16 lg:px-64">
                            {/* Feature 4 */}
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src="/assets/feat4.png"
                                    alt="Comprehensive Security Solutions"
                                    className="mb-6 h-32 w-32"
                                />
                                <h3 className="mb-4 text-xl font-bold text-gray-900">
                                    Comprehensive Security Solutions
                                </h3>
                                <p className="text-gray-600">
                                    In-depth Threat investigation capabilities
                                    identify the root cause of security
                                    incidents and take appropriate action to
                                    prevent future occurrences.
                                </p>
                            </div>

                            {/* Feature 5 */}
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src="/assets/feat5.png"
                                    alt="Rapid Response"
                                    className="mb-6 h-32 w-32"
                                />
                                <h3 className="mb-4 text-xl font-bold text-gray-900">
                                    Rapid Response
                                </h3>
                                <p className="text-gray-600">
                                    Tight integration with network and endpoint
                                    security solutions enables quick response to
                                    potential security incidents, minimizing the
                                    impact of any attacks.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Fifth Section - Values */}
                <section className="relative overflow-hidden pb-32 pt-20">
                    <div
                        className="absolute inset-0 scale-110 transform bg-center bg-no-repeat transition-transform duration-300"
                        style={{
                            backgroundImage: "url('/assets/landing5.jpeg')",
                            backgroundSize: 'cover',
                        }}
                    ></div>
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        }}
                    ></div>

                    {/* Content */}
                    <div className="container relative z-10 mx-auto px-4">
                        <div className="mx-auto max-w-4xl">
                            <h2 className="mb-12 text-center text-4xl font-bold text-[#293660]">
                                Sangfor Cyber Command's
                                <span className="block">
                                    Value to Customers
                                </span>
                            </h2>

                            {/* Value List */}
                            <div className="space-y-6">
                                {/* List Item 1 */}
                                <div className="flex items-start space-x-4">
                                    <div className="pt-1">
                                        <svg
                                            className="h-6 w-6"
                                            viewBox="0 0 36 36"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.90201 16.098C6.43801 14.634 4.06351 14.634 2.59801 16.098C1.13251 17.562 1.13401 19.9365 2.59801 21.402L9.56551 28.3695C11.739 30.543 15.261 30.543 17.4345 28.3695L18.804 27L7.90201 16.098Z"
                                                fill="#04BE02"
                                            />
                                            <path
                                                d="M33.402 7.098C31.938 5.634 29.5635 5.634 28.098 7.098L13.5 21.696L18.804 27L33.402 12.402C34.866 10.9365 34.866 8.562 33.402 7.098Z"
                                                fill="#293660"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-lg text-gray-600">
                                        Detect known dan unknown threats
                                    </p>
                                </div>

                                {/* List Item 2 */}
                                <div className="flex items-start space-x-4">
                                    <div className="pt-1">
                                        <svg
                                            className="h-6 w-6"
                                            viewBox="0 0 36 36"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.90201 16.098C6.43801 14.634 4.06351 14.634 2.59801 16.098C1.13251 17.562 1.13401 19.9365 2.59801 21.402L9.56551 28.3695C11.739 30.543 15.261 30.543 17.4345 28.3695L18.804 27L7.90201 16.098Z"
                                                fill="#04BE02"
                                            />
                                            <path
                                                d="M33.402 7.098C31.938 5.634 29.5635 5.634 28.098 7.098L13.5 21.696L18.804 27L33.402 12.402C34.866 10.9365 34.866 8.562 33.402 7.098Z"
                                                fill="#293660"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-lg text-gray-600">
                                        Much better visibility of security
                                        posture of the entire infrastructure
                                    </p>
                                </div>

                                {/* List Item 3 */}
                                <div className="flex items-start space-x-4">
                                    <div className="pt-1">
                                        <svg
                                            className="h-6 w-6"
                                            viewBox="0 0 36 36"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.90201 16.098C6.43801 14.634 4.06351 14.634 2.59801 16.098C1.13251 17.562 1.13401 19.9365 2.59801 21.402L9.56551 28.3695C11.739 30.543 15.261 30.543 17.4345 28.3695L18.804 27L7.90201 16.098Z"
                                                fill="#04BE02"
                                            />
                                            <path
                                                d="M33.402 7.098C31.938 5.634 29.5635 5.634 28.098 7.098L13.5 21.696L18.804 27L33.402 12.402C34.866 10.9365 34.866 8.562 33.402 7.098Z"
                                                fill="#293660"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-lg text-gray-600">
                                        Business Impact Analysis helps IT to
                                        understand what is already compromised
                                        and what needs to be prioritized
                                    </p>
                                </div>

                                {/* List Item 4 */}
                                <div className="flex items-start space-x-4">
                                    <div className="pt-1">
                                        <svg
                                            className="h-6 w-6"
                                            viewBox="0 0 36 36"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.90201 16.098C6.43801 14.634 4.06351 14.634 2.59801 16.098C1.13251 17.562 1.13401 19.9365 2.59801 21.402L9.56551 28.3695C11.739 30.543 15.261 30.543 17.4345 28.3695L18.804 27L7.90201 16.098Z"
                                                fill="#04BE02"
                                            />
                                            <path
                                                d="M33.402 7.098C31.938 5.634 29.5635 5.634 28.098 7.098L13.5 21.696L18.804 27L33.402 12.402C34.866 10.9365 34.866 8.562 33.402 7.098Z"
                                                fill="#293660"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-lg text-gray-600">
                                        Faster Response to improve overall
                                        security control
                                    </p>
                                </div>

                                {/* List Item 5 */}
                                <div className="flex items-start space-x-4">
                                    <div className="pt-1">
                                        <svg
                                            className="h-6 w-6"
                                            viewBox="0 0 36 36"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.90201 16.098C6.43801 14.634 4.06351 14.634 2.59801 16.098C1.13251 17.562 1.13401 19.9365 2.59801 21.402L9.56551 28.3695C11.739 30.543 15.261 30.543 17.4345 28.3695L18.804 27L7.90201 16.098Z"
                                                fill="#04BE02"
                                            />
                                            <path
                                                d="M33.402 7.098C31.938 5.634 29.5635 5.634 28.098 7.098L13.5 21.696L18.804 27L33.402 12.402C34.866 10.9365 34.866 8.562 33.402 7.098Z"
                                                fill="#293660"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-lg text-gray-600">
                                        Much more cost effective than other
                                        solutions such as SIEM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="relative z-20 mx-auto -mt-8 max-w-4xl px-4">
                    <h3 className="bg-[#293660] px-8 py-4 text-center text-2xl font-bold text-white">
                        Cyber Command Customers Reference
                    </h3>
                </div>

                {/* Sixth Section - Companies */}
                <section className="-mt-8 bg-[#f9fafe] py-32">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-4xl">
                            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                                <img
                                    src="/assets/value/jnt.png"
                                    alt="J&T"
                                    className="mx-auto h-16 object-contain"
                                />
                                <img
                                    src="/assets/value/jrp.png"
                                    alt="Jasa Raharja Putera"
                                    className="mx-auto h-20 object-contain"
                                />
                                <img
                                    src="/assets/value/ok.png"
                                    alt="OK Bank"
                                    className="mx-auto h-16 object-contain"
                                />
                                <img
                                    src="/assets/value/samudera.png"
                                    alt="Samudera Indonesia"
                                    className="mx-auto h-16 object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Seventh Section - Explore */}
                <section className="relative overflow-hidden py-20">
                    {/* Background Image Container */}
                    <div
                        className="absolute inset-0 scale-110 transform bg-center bg-no-repeat transition-transform duration-300"
                        style={{
                            backgroundImage: "url('/assets/landing6.jpeg')",
                            backgroundSize: 'cover',
                        }}
                    ></div>
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        }}
                    ></div>

                    {/* Content */}
                    <div className="container relative z-10 mx-auto px-4">
                        <div className="mx-auto max-w-4xl text-center">
                            <h2 className="mb-4 text-4xl font-bold text-[#293660]">
                                Explore Sangfor Cyber Command with Helios
                            </h2>
                            <p className="mb-16 text-lg text-gray-600">
                                Helios Informatika Nusantara as Sangfor
                                Distributor will provide
                            </p>

                            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                                {/* Card 1 */}
                                <div className="rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
                                    <div className="mb-6 flex justify-center">
                                        <div className="rounded-full bg-[#293660]">
                                            <img
                                                src="/assets/explore/exp1.png"
                                                alt="NDR Implementation"
                                                className="h-20 w-20"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#293660]">
                                        NDR Implementation
                                    </h3>
                                </div>

                                {/* Card 2 */}
                                <div className="rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
                                    <div className="mb-6 flex justify-center">
                                        <div className="rounded-full bg-[#293660]">
                                            <img
                                                src="/assets/explore/exp2.png"
                                                alt="Incident Response"
                                                className="h-20 w-20"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#293660]">
                                        Incident Response
                                        <span className="block">
                                            and Threat Hunting
                                        </span>
                                    </h3>
                                </div>

                                {/* Card 3 */}
                                <div className="rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
                                    <div className="mb-6 flex justify-center">
                                        <div className="rounded-full bg-[#293660]">
                                            <img
                                                src="/assets/explore/exp3.png"
                                                alt="Device Security"
                                                className="h-20 w-20"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#293660]">
                                        Device Security
                                        <span className="block">
                                            Maintenance
                                        </span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    );
}
