import { Mail, Instagram, Phone, ShieldCheck, Globe } from "lucide-react";

export function Footer() {
  return (
    <>
      <footer className="bg-wevets-navy py-12 px-4 sm:px-6 md:px-12 lg:px-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 flex flex-col gap-6">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fad3b24e0eebc41a888274aae2381ca13%2F4135522efcdc438487a2dbd4d670810f?format=webp&width=800"
              alt="WeVets Logo"
              className="w-48 h-auto"
            />

            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white/6 border border-white/12 text-white rounded-md px-3 py-2">
                <ShieldCheck className="w-5 h-5 text-white" />
                <span className="text-xs">SSL Secure</span>
              </div>
              <div className="flex items-center gap-2 bg-white/6 border border-white/12 text-white rounded-md px-3 py-2">
                <Globe className="w-5 h-5 text-white" />
                <span className="text-xs">Google Safe Browsing</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white">
                <Mail className="w-6 h-6" />
                <span className="font-montserrat font-bold">
                  app.wevets.com.br
                </span>
              </div>

              <div className="flex items-center gap-2 text-white">
                <Instagram className="w-6 h-6" />
                <span className="font-montserrat font-bold">@we.vets</span>
              </div>

              <div className="flex items-center gap-2 text-white">
                <Phone className="w-6 h-6" />
                <span className="font-montserrat font-bold">
                  (11) 3336-0600
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-wevets-navy border-t border-white/24 py-6 px-4 sm:px-6 md:px-12 lg:px-32">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-white text-sm">
            DR. PATINHAS HOLDING S.A. &nbsp; CNPJ 37.078.598/0001-41 &nbsp;
            Todos os direitos reservados.
          </span>
        </div>
      </div>
    </>
  );
}
