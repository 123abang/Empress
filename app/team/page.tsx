import Image from "next/image"

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Team</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="text-center">
          <Image src="/placeholder.svg" alt="John Doe" width={200} height={200} className="rounded-full mx-auto mb-4" />
          <h2 className="text-xl font-semibold">John Doe</h2>
          <p className="text-gray-600">Chief Investment Officer</p>
        </div>
        <div className="text-center">
          <Image
            src="/placeholder.svg"
            alt="Jane Smith"
            width={200}
            height={200}
            className="rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold">Jane Smith</h2>
          <p className="text-gray-600">Senior Financial Advisor</p>
        </div>
        <div className="text-center">
          <Image
            src="/placeholder.svg"
            alt="Mike Johnson"
            width={200}
            height={200}
            className="rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold">Mike Johnson</h2>
          <p className="text-gray-600">Risk Management Specialist</p>
        </div>
      </div>
    </div>
  )
}

