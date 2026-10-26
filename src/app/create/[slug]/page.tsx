import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductGallery from '@/components/ProductGallery';
import { CATEGORY_PAGES, getCategoryPage } from '@/data/categoryCatalog';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return CATEGORY_PAGES.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryPage(slug);
  if (!category) return { title: 'Keller Adapt' };
  return {
    title: `${category.title} | Keller Adapt`,
    description: category.lead,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryPage(slug);
  if (!category) notFound();

  return (
    <>
      <Navbar />
      <main className="category-page">
        <div className="keller-container">
          <Link className="category-back" href="/#what-we-create">
            What we create
          </Link>
          <h1>{category.title}</h1>
          <p className="category-lead">{category.lead}</p>

          {category.groups.map((group) => (
            <section key={group.title ?? 'products'} className="category-group">
              {group.title ? <h2>{group.title}</h2> : null}
              <div className="category-products">
                {group.items.map((item) => (
                  <article key={item.name} className="category-product">
                    <ProductGallery name={item.name} images={item.images ?? [item.image]} />
                    <div>
                      <h3>{item.name}</h3>
                      <p className="category-subtitle">{item.subtitle}</p>
                      <p className="category-copy">{item.description}</p>
                      <dl className="category-facts">
                        <div>
                          <dt>Materials</dt>
                          <dd>{item.materials}</dd>
                        </div>
                        <div>
                          <dt>Available as</dt>
                          <dd>
                            <ul>
                              {item.types.map((type) => (
                                <li key={type}>{type}</li>
                              ))}
                            </ul>
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}

          <p className="category-enquiry">
            <Link href="/#contact">Ask about a piece</Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
