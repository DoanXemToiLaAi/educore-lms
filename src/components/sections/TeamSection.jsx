import React from "react";
import { useInView } from "../../hooks/useIntersectionObserver";
import colorVariants from "../../assets/styles/colorVariants";

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

const TeamSection = () => {
  const { ref: teamRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const teamMembers = [
    {
      id: 1,
      name: "Team Lead",
      role: "Project Lead & Full Stack Developer",
      image: "/team-images/team-lead.jpg",
      description: "Leading the vision and technical architecture",
      color: "blue",
      delay: 0.1,
    },
    {
      id: 2,
      name: "Front-end Lead",
      role: "Frontend Developer",
      image: "/team-images/frontend-lead.jpg",
      description: "React, TailwindCSS, Frontend Architecture",
      color: "purple",
      delay: 0.2,
    },
    {
      id: 3,
      name: "Backend Lead",
      role: "Backend Developer",
      image: "/team-images/backend-lead.jpg",
      description: "API Development, Database Design, Security",
      color: "green",
      delay: 0.3,
    },
    {
      id: 4,
      name: "UI/UX Designer",
      role: "UX/UI Design Lead",
      image: "/team-images/designer.jpg",
      description: "User Experience, Interface Design",
      color: "pink",
      delay: 0.4,
    },
    {
      id: 5,
      name: "Full Stack Dev",
      role: "Full Stack Developer",
      image: "/team-images/fullstack-dev.jpg",
      description: "Full Stack Development, DevOps",
      color: "indigo",
      delay: 0.5,
    },
  ];

  return (
    <section
      id="team"
      className="relative py-20 overflow-hidden bg-gray-50"
      ref={teamRef}>
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Meet Our Development Team
          </h2>
          <p className="text-lg text-gray-600">
            A passionate team dedicated to revolutionizing educational
            technology
          </p>
        </div>

        <TooltipProvider>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member) => {
              const variant = colorVariants[member.color];
              return (
                <Card
                  key={member.id}
                  className={`transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl`}>
                  <CardContent className="flex flex-col items-center text-center p-6">
                    <div
                      className={`ring-4 ${variant.ring} rounded-full overflow-hidden mb-4`}>
                      <Avatar className="w-32 h-32">
                        <AvatarImage
                          src={member.image}
                          alt={`${member.name} - ${member.role}`}
                          className="object-cover w-full h-full"
                        />
                      </Avatar>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900">
                      {member.name}
                    </h3>

                    <Badge
                      className={`${variant.badge} text-sm font-medium mt-2`}>
                      {member.role}
                    </Badge>

                    <p className="text-gray-600 text-sm mt-3">
                      {member.description}
                    </p>

                    <div className="flex gap-4 mt-5">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() =>
                              window.open("https://github.com", "_blank")
                            }
                            className={`bg-gradient-to-r ${variant.bg} ${variant.hover} text-white`}>
                            <i className="ri-github-fill text-xl"></i>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub</p>
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
                            className={`bg-gradient-to-r ${variant.bg} ${variant.hover} text-white`}>
                            <i className="ri-linkedin-box-fill text-xl"></i>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>LinkedIn</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default TeamSection;
