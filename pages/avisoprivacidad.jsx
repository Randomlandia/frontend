import Navbar from "../components/Navbar";

export default function AvisoPrivacidad() {
  return (
    <main className="w-full  max-w-screen flex flex-col bg-white pb-8 ">
      <Navbar />
      <div className="px-10 py-5">
        <div className=" flex text-dorange font-ram text-center text-xl p-5 justify-center">
          Aviso de Privacidad Integral
        </div>

        <div className="flex-col text-black justify-center bg-oldwhite/40 py-5 px-10 rounded-md text-wrap">
          <p className="text-center">
            Random Landia es el responsable del uso y protección de sus datos
            personales, y al respecto le informamos lo siguiente:
          </p>
          <p className="font-bold text-dorange text-lg py-2">
            ¿Para qué fines utilizaremos sus datos personales?
          </p>
          <p>
            Los datos personales que recabamos de usted, los utilizaremos para
            las siguientes finalidades que son necesarias para el servicio que
            solicita: Respuesta a mensajes del formulario de contacto,
            Prestación de cualquier servicio solicitado, Envío de productos
            adquiridos en la tienda en línea.
          </p>
          <p className="font-bold  text-dorange text-lg py-2">
            ¿Qué datos personales utilizaremos para estos fines?
          </p>
          <p>
            Para llevar a cabo las finalidades descritas en el presente aviso de
            privacidad, utilizaremos los siguientes datos personales: Datos de
            identificación y contacto
          </p>
          <p className="font-bold  text-dorange text-lg py-2">
            ¿Cómo puede acceder, rectificar o cancelar sus datos personales, u
            oponerse a su uso o ejercer la revocación de consentimiento?
          </p>
          <p>
            Usted tiene derecho a conocer qué datos personales tenemos de usted,
            para qué los utilizamos y las condiciones del uso que les damos
            (Acceso). Asimismo, es su derecho solicitar la corrección de su
            información personal en caso de que esté desactualizada, sea
            inexacta o incompleta (Rectificación); que la eliminemos de nuestros
            registros o bases de datos cuando considere que la misma no está
            siendo utilizada adecuadamente (Cancelación); así como oponerse al
            uso de sus datos personales para fines específicos (Oposición).
            Estos derechos se conocen como derechos ARCO.
          </p>
          <p className="py-2">
            Para el ejercicio de cualquiera de los derechos ARCO, debe enviar
            una petición vía correo electrónico a{" "}
            <a
              href="mailto:landiarandomrandy@gmail.com"
              className="text-blue-600 underline"
            >
              landiarandomrandy@gmail.com
            </a>{" "}
            y deberá contener:
          </p>
          <ul className="indent-6 py-5 font-semibold">
            <li>😺Nombre completo del titular</li>
            <li>😺Domicilio</li>
            <li>😺Teléfono</li>
            <li>😺Correo electrónico usado en este sitio web</li>
            <li>😺Copia de una identificación oficial adjunta</li>
            <li>😺Asunto «Derechos ARCO»</li>
          </ul>
          <p>
            Descripción el objeto del escrito, los cuales pueden ser de manera
            enunciativa más no limitativa los siguientes: Revocación del
            consentimiento para tratar sus datos personales; y/o Notificación
            del uso indebido del tratamiento de sus datos personales; y/o
            Ejercitar sus Derechos ARCO, con una descripción clara y precisa de
            los datos a Acceder, Rectificar, Cancelar o bien, Oponerse. En caso
            de Rectificación de datos personales, deberá indicar la modificación
            exacta y anexar la documentación soporte; es importante en caso de
            revocación del consentimiento, que tenga en cuenta que no en todos
            los casos podremos atender su solicitud o concluir el uso de forma
            inmediata, ya que es posible que por alguna obligación legal
            requiramos seguir tratando sus datos personales. Asimismo, usted
            deberá considerar que para ciertos fines, la revocación de su
            consentimiento implicará que no le podamos seguir prestando el
            servicio que nos solicitó, o la conclusión de su relación con
            nosotros.
          </p>
          <p className="font-bold  text-dorange  text-lg py-2">
            ¿En cuántos días le daremos respuesta a su solicitud?
          </p>
          <p>20 días</p>
          <p className="font-bold  text-dorange text-lg py-2">
            ¿Por qué medio le comunicaremos la respuesta a su solicitud?
          </p>
          <p>Al mismo correo electrónico de donde se envió la petición.</p>
          <p className="font-bold  text-dorange text-lg py-2">
            El uso de tecnologías de rastreo en nuestro portal de internet
          </p>
          <p>
            Le informamos que en nuestra página de internet utilizamos cookies,
            web beacons u otras tecnologías, a través de las cuales es posible
            monitorear su comportamiento como usuario de internet, así como
            brindarle un mejor servicio y experiencia al navegar en nuestra
            página. Los datos personales que obtenemos de estas tecnologías de
            rastreo son los siguientes:
          </p>
          <p className="font-bold  text-dorange text-lg py-2">
            Identificadores, nombre de usuario y contraseñas de sesión
          </p>
          <p>
            Estas cookies, web beacons y otras tecnologías pueden ser
            deshabilitadas. Para conocer cómo hacerlo, consulte el menú de ayuda
            de su navegador. Tenga en cuenta que, en caso de desactivar las
            cookies, es posible que no pueda acceder a ciertas funciones
            personalizadas en nuestro sitio web.
          </p>
          <p className="font-bold  text-dorange text-lg py-2">
            ¿Cómo puede conocer los cambios en este aviso de privacidad?
          </p>
          <p>
            El presente aviso de privacidad puede sufrir modificaciones, cambios
            o actualizaciones derivadas de nuevos requerimientos legales; de
            nuestras propias necesidades por los productos o servicios que
            ofrecemos; de nuestras prácticas de privacidad; de cambios en
            nuestro modelo de negocio, o por otras causas. Nos comprometemos a
            mantener actualizado este aviso de privacidad sobre los cambios que
            pueda sufrir y siempre podrá consultar las actualizaciones que
            existan en el sitio web .
          </p>
          <p className="py-5 text-center italic text-slate-600">
            Última actualización de este aviso de privacidad: 16/07/2024
          </p>
        </div>
      </div>
    </main>
  );
}
