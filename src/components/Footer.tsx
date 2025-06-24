import { useState } from "react";
import { Heart, Mail, Phone, Globe } from "lucide-react";

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showImpressum, setShowImpressum] = useState(false);

  return (
    <>
      <footer className="glass-panel py-6 px-4 mt-10 rounded-t-2xl text-gray-800 dark:text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-sm text-center md:text-left">
              © 2025 Bündnis Kevin Teller. Alle Rechte vorbehalten. Das BKT ist selbstverständlich keine ECHTE Partei.
            </p>
            <div className="flex gap-4 mt-2 justify-center md:justify-start text-sm">
              <button onClick={() => setShowPrivacy(true)} className="hover:underline transition-all duration-200">Datenschutz</button>
              <button onClick={() => setShowImpressum(true)} className="hover:underline transition-all duration-200">Impressum</button>
            </div>
          </div>
          <div className="text-sm flex items-center gap-2">
            Designed by <span className="font-bold text-pink-400">EministarVR</span> with <Heart className="text-red-500" size={16} />
          </div>
        </div>
      </footer>

      {/* Overlay + Popup Container */}
      {(showPrivacy || showImpressum) && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex items-center justify-center transition-opacity duration-300"
          onClick={() => {
            setShowPrivacy(false);
            setShowImpressum(false);
          }}
        >
          <div
            className="bg-white dark:bg-gray-900 text-black dark:text-white p-8 rounded-xl max-w-2xl mx-auto shadow-xl relative transform transition-transform duration-300 scale-100 hover:scale-105"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Schließen Button */}
            <button
              onClick={() => {
                setShowPrivacy(false);
                setShowImpressum(false);
              }}
              className="absolute top-3 right-4 text-xl text-gray-500 hover:text-red-500 transition-colors duration-200"
              aria-label="Schließen"
            >
              &times;
            </button>

            {/* Inhalte */}
            {showPrivacy && (
              <>
                <h2 className="text-2xl font-bold mb-4">📜 Datenschutzerklärung</h2>
                <div className="space-y-4 text-sm leading-relaxed">
                  <p>
                    Datenschutz ist uns wichtig – aber diese Seite speichert bewusst <strong>keine personenbezogenen Daten</strong>.
                  </p>
                  <p>
                    Es gibt keine Tracking-Cookies, keine Google Fonts, keine IP-Speicherung – nur purer Spaß. Wenn sich das ändert, informieren wir dich sofort.
                  </p>
                  <p>
                    Diese Website dient rein der Unterhaltung. Falls du trotzdem Fragen hast, melde dich gerne!
                  </p>
                </div>
              </>
            )}

            {showImpressum && (
              <>
                <h2 className="text-2xl font-bold mb-4">🧾 Impressum</h2>
                <div className="space-y-2 text-sm leading-relaxed">
                  <p><strong>Verantwortlich gemäß § 5 TMG:</strong><br />EministarVR (kein echter Name)</p>
                  <p className="flex items-center gap-2"><Mail size={16} /> kontakt@bkt-info.org</p>
                  <p className="flex items-center gap-2"><Phone size={16} /> +49 155 6659 5553</p>
                  <p className="flex items-center gap-2"><Globe size={16} /> www.bkt-info.org</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                    Hinweis: Diese Website ist ein satirisches Projekt und erhebt keinen Anspruch auf Vollständigkeit, Seriosität oder Realitätsbezug.  
                    Alle Inhalte sind humorvoll gemeint.  
                    Quellcode: <a href="https://github.com/EministarVR" className="underline hover:text-red-500">GitHub ansehen</a>
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
