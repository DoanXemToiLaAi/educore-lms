import React from "react";
import { useInView } from "../../hooks/useIntersectionObserver";
import colorVariants from "../../assets/styles/colorVariants";
import "../../assets/styles/animations.css";

import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Github, Linkedin } from "lucide-react";

const TeamSection = () => {
  const { ref: teamRef } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const teamMembers = [
    {
      id: 1,
      name: "Trưởng Nhóm",
      role: "Trưởng Dự Án & Lập Trình Viên Full Stack",
      image: "/team-images/team-lead.jpg",
      description: "Định hướng tầm nhìn và kiến trúc kỹ thuật",
      color: "blue",
      delay: 0.1,
    },
    {
      id: 2,
      name: "Trưởng Front-end",
      role: "Lập Trình Viên Frontend",
      image: "/team-images/frontend-lead.jpg",
      description: "React, TailwindCSS, Kiến trúc Frontend",
      color: "purple",
      delay: 0.2,
    },
    {
      id: 3,
      name: "Trưởng Backend",
      role: "Lập Trình Viên Backend",
      image: "/team-images/backend-lead.jpg",
      description: "Phát triển API, Thiết kế Cơ sở dữ liệu, Bảo mật",
      color: "green",
      delay: 0.3,
    },
    {
      id: 4,
      name: "Nhà Thiết Kế UI/UX",
      role: "Trưởng Thiết Kế UX/UI",
      image: "/team-images/designer.jpg",
      description: "Trải nghiệm người dùng, Thiết kế giao diện",
      color: "pink",
      delay: 0.4,
    },
    {
      id: 5,
      name: "Lập Trình Viên Full Stack",
      role: "Phát Triển Full Stack",
      image: "/team-images/fullstack-dev.jpg",
      description: "Phát triển Full Stack, DevOps",
      color: "indigo",
      delay: 0.5,
    },
  ];

  return (
    <section
      id="team"
      className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white"
      ref={teamRef}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-y-0 right-0 w-1/2 bg-contain bg-no-repeat bg-right"
          style={{
            backgroundImage: "url('/assets/images/team-pattern.svg')",
          }}></div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
            Đội Ngũ Phát Triển Của Chúng Tôi
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Những người đam mê, tận tâm cách mạng hóa công nghệ giáo dục
          </p>
        </div>

        <TooltipProvider>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto">
            {teamMembers.map((member) => {
              const variant = colorVariants[member.color];
              return (
                <div
                  key={member.id}
                  className={`flex flex-col h-full opacity-0 animate-slide-in animate-delay-${
                    member.delay * 1000
                  }`}
                  style={{ animationDelay: `${member.delay}s` }}>
                  <Card className="h-full flex flex-col transition-all duration-300 hover-scale shadow-md hover:shadow-xl border border-gray-100 overflow-hidden">
                    <CardContent className="flex flex-col items-center text-center p-8 h-full">
                      {/* Profile image with ring */}
                      <div
                        className={`mb-5 rounded-full p-1.5 ${variant.light} shadow-lg`}>
                        <div
                          className={`ring-4 ${variant.ring} rounded-full overflow-hidden`}>
                          <Avatar className="w-28 h-28 md:w-32 md:h-32">
                            <AvatarImage
                              src={member.image}
                              alt={`${member.name} - ${member.role}`}
                              className="object-cover w-full h-full"
                            />
                          </Avatar>
                        </div>
                      </div>

                      {/* Name */}
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
                        {member.name}
                      </h3>

                      {/* Role badge */}
                      <Badge
                        className={`${variant.badge} font-medium px-3 py-1`}>
                        {member.role}
                      </Badge>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 mt-4 mb-6 flex-grow">
                        {member.description}
                      </p>

                      {/* Social buttons */}
                      <div className="flex gap-4 mt-auto">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              size="icon"
                              variant="ghost"
                              onClick={() =>
                                window.open("https://github.com", "_blank")
                              }
                              className={`bg-gradient-to-r ${variant.bg} ${variant.hover} text-white h-10 w-10 rounded-full flex items-center justify-center`}>
                              <Github className="h-5 w-5" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Trang GitHub</p>
                          </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              size="icon"
                              variant="ghost"
                              onClick={() =>
                                window.open("https://linkedin.com", "_blank")
                              }
                              className={`bg-gradient-to-r ${variant.bg} ${variant.hover} text-white h-10 w-10 rounded-full flex items-center justify-center`}>
                              <Linkedin className="h-5 w-5" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Trang LinkedIn</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default TeamSection;
