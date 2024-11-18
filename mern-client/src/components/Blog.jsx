import React from 'react';

const Blog = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-700">My Blog</h1>
        <p className="text-lg text-gray-600 mt-2">Sharing insights and stories from my journey.</p>
      </header>
      <section className="bg-white shadow-lg rounded-lg p-6">
        <article className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">The Journey of Learning React</h2>
          <p className="text-sm text-gray-500 mb-4">August 28, 2024</p>
          <p className="text-base text-gray-700 leading-relaxed">
            Learning React has been an incredibly rewarding experience. From grasping the fundamentals of components and state to mastering hooks and context, each step has brought new challenges and insights. Building interactive and dynamic user interfaces has allowed me to explore creative solutions and improve my problem-solving skills. The journey is ongoing, but every milestone achieved adds to a deeper understanding and appreciation of modern web development.
          </p>
        </article>
        <article>
          <h2 className="text-3xl font-semibold text-gray-800">Exploring the MERN Stack</h2>
          <p className="text-sm text-gray-500 mb-4">August 27, 2024</p>
          <p className="text-base text-gray-700 leading-relaxed">
            Diving into the MERN stack has opened up new avenues for creating full-stack applications. With MongoDB, Express.js, React, and Node.js, the combination offers a powerful framework for building scalable and efficient web applications. Understanding how each component interacts and integrates has been crucial in developing robust solutions. The flexibility and efficiency of the MERN stack continue to impress, making it a valuable toolset in my development toolkit.
          </p>
        </article>
      </section>
    </div>
  );
};

export default Blog;
