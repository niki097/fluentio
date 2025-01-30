import {
    Headphones,
    Lightbulb,
    Users,
    Target,
    Sparkles,
    BookOpen,
} from 'lucide-react';
import { ServiceCard } from './ServiceCard';

const services = [
    {
        title: '24/7 Support',
        description:
            'Access continuous support from mentors around the clock, ensuring assistance anytime.',
        icon: <Headphones className="w-6 h-6 text-purple-600" />,
        className: 'bg-customPurple-light',
    },
    {
        title: 'Skill dev.',
        description:
            "Skill development is English is essential for success in today's globalized world.",
        icon: <Lightbulb className="w-6 h-6 text-yellow-600" />,
        className: 'bg-Yellow',
    },
    {
        title: 'One-on-One session',
        description:
            'Experience personalized guidance and focused attention in our one-on-one sessions.',
        icon: <Users className="w-6 h-6 text-cyan-600" />,
        className: 'bg-LightBlue',
    },
    {
        title: 'Goal Tracker',
        description:
            'Our goal tracker feature helps you stay on track and achieve your objectives.',
        icon: <Target className="w-6 h-6 text-blue-600" />,
        className: 'bg-LightYellow',
    },
    {
        title: 'Fun Feat.',
        description:
            'Discover our fun features designed to add enjoyment into your learning journey.',
        icon: <Sparkles className="w-6 h-6 text-green-600" />,
        className: 'bg-green-50',
    },
    {
        title: 'Daily Words',
        description:
            'Delivering a new word each day to enrich your language skills.',
        icon: <BookOpen className="w-6 h-6 text-pink-600" />,
        className: 'bg-Pink',
    },
];

export function ServicesSection() {
    return (
        <section className="py-16 max-w-7xl mt-8 mx-auto">
            <h2 className="text-5xl font-bold text-center mb-16 text-DarkBlue">
                Browse Top Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        description={service.description}
                        icon={service.icon}
                        className={service.className}
                    />
                ))}
            </div>
        </section>
    );
}
