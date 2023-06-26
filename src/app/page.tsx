import Image from 'next/image'
import data from './data/sample'
import { For } from '../components/solidCopy'


export default function Home() {
  return (
      <main className="w-full h-full flex flex-col gap-6 items-center justify-center">
	<For each={data["jobs"]} fallback={<div className="w-12 h-12 border-8 border-gray-600 rounded-full loader"></div>}>
	  {(job, index) => (
	      <div className="p-4 text-xl border-2" key={index}>
		<div className="flex flex-col">
		  <h1>{job["company-name"]}</h1>
		  <span>{job["job-title"]}</span>
		  <span>{job["date"]}</span>
		  <span>{job["status"]}</span>
		</div>
	      </div>
	  )}
	</For>
      </main>
   )
}
