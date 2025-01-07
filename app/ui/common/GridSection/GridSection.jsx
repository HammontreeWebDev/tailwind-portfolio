
export default function GridSection({ posts, title, subTitle }) {
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="title-text text-balance text-4xl font-semibold tracking-tight text-[var(--primary2)] sm:text-5xl">
                        {title}
                    </h2>
                    <p className="mt-2 text-lg/8 text-gray-600">{subTitle}</p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex flex-col items-start justify-between">
                            <div className="w-full">
                                <a href={post.href}>
                                    <img
                                        alt={post.alt}
                                        src={post.imageUrl}
                                        className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                    />
                                </a>
                            </div>
                            <div className="max-w-xl">
                                <div className="mt-8 flex items-center gap-x-4 text-xs">
                                    <p className="text-[var(--primary1)]">{post.category.title}</p>
                                </div>
                                <div className="group relative">
                                    <h3 className="title-text mt-3 text-lg/6 font-semibold text-white group-hover:text-[var(--primary4)]">
                                        <a href={post.href}>
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
