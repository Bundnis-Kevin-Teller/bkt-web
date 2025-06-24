import { useState } from "react";
import { Heart, Mail, Phone, Globe, ShieldCheck } from "lucide-react";

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showImpressum, setShowImpressum] = useState(false);

  const closePopup = () => {
    setShowPrivacy(false);
    setShowImpressum(false);
  };

  return (
    <>
      <footer className="glass-panel py-8 px-6 mt-12 rounded-t-2xl text-gray-800 dark:text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm">
              © 2025 <span className="font-bold text-red-500">Bündnis Kevin Teller</span>. Alle Rechte vorbehalten.
            </p>
            <p className="text-xs mt-1 italic">
              Hinweis: Diese Partei ist natürlich nicht echt – aber dafür echt unterhaltsam. 😎
            </p>
            <div className="flex gap-4 mt-3 justify-center md:justify-start text-sm">
              <button onClick={() => setShowPrivacy(true)} className="hover:underline hover:text-red-500 transition-all">Datenschutz</button>
              <button onClick={() => setShowImpressum(true)} className="hover:underline hover:text-red-500 transition-all">Impressum</button>
            </div>
          </div>

          <div className="text-sm flex items-center gap-2">
            Made with <Heart className="text-pink-500 animate-pulse" size={16} /> by <span className="font-semibold text-pink-400">EministarVR</span>
          </div>
        </div>
      </footer>

      {(showPrivacy || showImpressum) && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4"
          onClick={closePopup}
        >
          <div
            className="bg-white dark:bg-zinc-900 text-black dark:text-white p-8 rounded-2xl max-w-2xl w-full shadow-2xl relative animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-5 text-2xl text-gray-400 hover:text-red-500 transition"
              aria-label="Schließen"
            >
              &times;
            </button>

            {/* Privacy Content */}
            {showPrivacy && (
  <>
    <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
      <ShieldCheck className="text-red-500" size={24} />
      Datenschutzerklärung
    </h2>
    <div className="space-y-4 text-sm leading-relaxed">
      <p>
        Deine Privatsphäre liegt uns am Herzen. Deshalb speichern wir: <strong>gar nichts</strong>.
      </p>
      <p>
        Kein Google Analytics, kein Cookie-Tracking, kein IP-Mining – nur gute Vibes und eine spaßige Website.
      </p>
      <p>
        Falls du das Kontaktformular nutzt, wird deine Nachricht **per Discord Webhook** an unser internes Team weitergeleitet.
        Nur autorisierte Mitglieder haben Zugriff darauf. Es erfolgt **keine Speicherung in einer Datenbank**.
      </p>
      <p>
        Die Daten werden ausschließlich zur Bearbeitung deiner Nachricht verwendet – und garantiert **nicht** verkauft oder für Marketing-Spam missbraucht. Versprochen. 🤝
      </p>
      <p>
        Falls wir jemals anfangen sollten, Daten zu erheben (unlikely), informieren wir dich rechtzeitig – per Brieftaube oder Meme.
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        Letztes Update: 01.01.2025 – Datenschutzstatus: chillig.
      </p>
    </div>
  </>
)}

            {/* Impressum Content */}
            {showImpressum && (
              <>
                <h2 className="text-3xl font-bold mb-4">Impressum</h2>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p><strong>Verantwortlich nach § 5 TMG:</strong><br />EministarVR (kein echter Name, aber echter Einsatz)</p>
                  <p className="flex items-center gap-2"><Mail size={16} /> <a href="mailto:kontakt@bkt-info.org" className="hover:underline">kontakt@bkt-info.org</a></p>
                  <p className="flex items-center gap-2"><Phone size={16} /> +49 155 6659 5553</p>
                  <p className="flex items-center gap-2"><Globe size={16} /> <a href="https://www.bkt-info.org" target="_blank" rel="noopener noreferrer" className="hover:underline">www.bkt-info.org</a></p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Diese Website dient der Satire. Es besteht keinerlei Anspruch auf politische Korrektheit oder Ernsthaftigkeit.
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Open Source & proudly built by der Community. Code ansehen auf:{" "}
                    <a href="https://github.com/Bundnis-Kevin-Teller/bkt-web" target="_blank" rel="noopener noreferrer" className="underline hover:text-red-500">
                      GitHub
                    </a>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
