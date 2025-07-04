import React from 'react'
import {Button} from "@/components/ui/button";
import Link from 'next/link'
import Image from "next/image";
import {dummyInterviews} from "@/constants";
import InterviewCard from "@/components/InterviewCard";

const Page = () => {
    return (
        <>
            <section className="card-cta">
                <div className="flex flex-col gap-6 max-w-lg">
                    <h2> Get Interview-Ready with AI-Powered Practice & Feedback </h2>
                    <p className="text-lg">
                        Practice on real interview questions and get instant feedback
                    </p>
                    <Button asChild className="btm-primary max-sm:w-full">
                <Link href="/interview">Start an Interview</Link>

                    </Button>
                </div>
                <Image src="/robot.png" alt="robo-dude" width={400} height={400} className="max-sm:hidden"/>
            </section>
            <section className="flex flex-col gap-6 mt-8">
                <h2>Your Interview</h2>
                <div className="interviews-section">
                    {dummyInterviews.map((interview)=>(
                        <InterviewCard key={interview.id} {...interview} />
                        ))}
                </div>

            </section>
            <section className="flex flex-col gap-6 mt-8">
                <h2>Take an interview </h2>
                <div className="interviews-section">
                    <div className="interviews-section">
                        {dummyInterviews.map((interview) => (
                            <InterviewCard key={interview.id} {...interview} />
                        ))}
                    </div>
                    {/*<p> There are no interviews available</p>*/}
                </div>
            </section>
        </>
    )
}
export default Page
