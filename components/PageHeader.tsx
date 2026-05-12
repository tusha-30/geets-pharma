type Props = {
  eyebrow: string;
  title: string;
  desc?: string;
  image?: string;
};

export default function PageHeader({ eyebrow, title, desc, image }: Props) {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: `url(${
            image ||
            "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1800&q=80"
          })`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/40" />
      <div className="relative container py-20 md:py-28">
        <span className="eyebrow !text-brand-300">{eyebrow}</span>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-white text-balance max-w-3xl">
          {title}
        </h1>
        {desc && (
          <p className="mt-5 max-w-2xl text-gray-200 text-base md:text-lg">
            {desc}
          </p>
        )}
      </div>
    </section>
  );
}
