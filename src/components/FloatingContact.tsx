import { BackToTop } from "@/components/BackToTop";
import { CONTACT } from "@/lib/site";

const btn = "grid h-12 w-12 place-items-center rounded-full text-white shadow-lg transition hover:scale-110";

export function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <BackToTop className={btn} />
      <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className={`${btn} bg-[#25D366]`}>
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.3-.5 0-1 .3-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2.1 1-2.4c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .7.5l.9 2.2c.1.2.1.4 0 .6l-.4.6-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.7-.1l.9-1.1c.2-.3.4-.2.7-.1l2.1 1c.3.2.5.2.6.4.1.1.1.7-.3 1.4Z" />
        </svg>
      </a>
      <a href={CONTACT.zalo} target="_blank" rel="noreferrer" aria-label="Zalo" className={`${btn} bg-[#0068FF] text-xs font-bold`}>
        Zalo
      </a>
      <a
        href={CONTACT.email ? `mailto:${CONTACT.email}` : "/lien-he"}
        aria-label="Email"
        className={`${btn} bg-accent`}
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      </a>
    </div>
  );
}
