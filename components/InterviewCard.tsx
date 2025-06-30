import React from 'react'
import dayjs from 'dayjs'
import Image from "next/image";
import Link from 'next/link'

import {getRandomInterviewCover} from "@/lib/utils";
import DisplayTechIcons from "@/components/DisplayTechIcons";
const InterviewCard = ({ interviewId,userId,role,type,techstack,createdAt }: InterviewCardProps) => {
    const feedback=null as Feedback|null;
    const normalizedType=/mix/gi.test(type)? 'Mixed':type;
    const formattedDate=dayjs(feedback?.createdAt||createdAt||Date.now()).format('MMM D,YYYY');
    return (
        <div className="card-border w-[360px] max-sm:w-full min-h-96">
            <div className="card-interview flex flex-col justify-between h-full p-5">
                {/* Top section */}
                <div className="relative flex flex-col items-center">
                    {/* Badge */}
                    <div className="absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600">
                        <p className="badge-text">{normalizedType}</p>
                    </div>

                    {/* Cover image */}
                    <Image
                        src={getRandomInterviewCover()}
                        alt="cover image"
                        width={90}
                        height={90}
                        className="rounded-full object-fit size-[90px]"
                    />

                    {/* Title */}
                    <h3 className="mt-5 text-center capitalize">{role} Interview</h3>

                    {/* Date and Score */}
                    <div className="flex flex-row gap-5 mt-3 text-sm">
                        <div className="flex flex-row items-center gap-2">
                            <Image src="/calendar.svg" alt="calendar" width={22} height={22} />
                            <p>{formattedDate}</p>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <Image src="/star.svg" alt="star" width={22} height={22} />
                            <p>{feedback?.totalScore || "---"}/100</p>
                        </div>
                    </div>

                    {/* Assessment */}
                    <p className="line-clamp-2 mt-5 text-center text-sm">
                        {feedback?.finalAssessment ||
                            "You haven't taken the interview yet. Take it now to improve your skills."}
                    </p>
                </div>

                {/* Bottom section */}
                <div className="flex flex-row justify-between">
                    <DisplayTechIcons techStack={techstack}/>
                    <Link
                        href={
                            feedback
                                ? `/interview/${interviewId}/feedback`
                                : `/interview/${interviewId}`
                        }
                        className="btn btn-primary text-xs px-2 py-2 rounded-lg"
                    >
                        {feedback ? "Check Feedback" : "View Interview"}
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default InterviewCard
