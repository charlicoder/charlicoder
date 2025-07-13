
import React from "react";
import ProfileLayout from "@/components/ProfileLayout";
import ProfileHeader from "@/components/ProfileHeader";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import CertificationsSection from "@/components/CertificationsSection";
import WorkExperienceSection from "@/components/WorkExperienceSection";
import RecommendationsSection from "@/components/RecommendationsSection";
import CompaniesSection from "@/components/CompaniesSection";
import {
    profileData,
    skillCategories,
    socialLinks,
    certifications,
    workExperience,
    recommendations,
    companies
} from "@/data/profileData";

const About = () => {
    // Filter out email from socialLinks
    const filteredSocialLinks = socialLinks.filter(link => link.platform !== 'email');

    return (
        <ProfileLayout>
            <ProfileHeader
                name={profileData.name}
                title={profileData.title}
                location={profileData.location}
                email={profileData.email}
                secondaryEmail={profileData.secondaryEmail}
                phone={profileData.phone}
                imgUrl={profileData.imgUrl}
                available={profileData.available}
            />

            <AboutSection />

            <SkillsSection skillCategories={skillCategories} />

            <CompaniesSection companies={companies} />

            <CertificationsSection certifications={certifications} />

            <WorkExperienceSection experiences={workExperience} />

            <RecommendationsSection recommendations={recommendations} />

            <ContactSection socialLinks={filteredSocialLinks} />
        </ProfileLayout>
    );
};

export default About;
