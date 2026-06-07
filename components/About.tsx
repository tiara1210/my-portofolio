export default function About() {
  return (
    <section
      id="about"
      className="section relative min-h-screen flex items-center"
    >
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-32 mx-auto rounded-full bg-gradient-to-r from-red to-orange-light"></div>
        </div>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I'm Ara, a frontend developer who builds modern and scalable web
            applications using Next.js and REST API architecture.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I've worked on real-world systems such as cashier applications,
            alumni platforms, and internal tools. I also have experience as a
            web development instructor and mentor, helping students understand
            Laravel and develop their own applications.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I'm passionate about building clean user interfaces, solving
            real-world problems, and continuously growing as a developer.
          </p>
          <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="space-y-2 text-gray-300">
              <p className="font-medium">Dian Nuswantoro University</p>
              <p>informatics engineering</p>
              <p>GPA: 3.74 / 4.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
