// Textos editoriales aprobados de Perspectivas empresariales (fuente: Notion).
// No editar el contenido sin aprobación editorial.

export type PerspectiveBlock =
  | { type: "heading"; id: string; text: string }
  | { type: "paragraph"; html: string }
  | { type: "key"; html: string };

export type Perspective = {
  number: number;
  slug: string;
  title: string;
  excerpt: string;
  blocks: PerspectiveBlock[];
};

export const perspectives: Perspective[] = [
  {
    "number": 1,
    "slug": "por-que-fracasan-los-proyectos-de-sistemas-empresariales",
    "title": "¿Por qué fracasan los proyectos de sistemas empresariales?",
    "excerpt": "Un sistema puede funcionar perfectamente desde el punto de vista tecnológico y, sin embargo, fracasar como proyecto empresarial.",
    "blocks": [
      {
        "type": "paragraph",
        "html": "A lo largo de mi trayectoria profesional he visto empresas invertir cantidades importantes de dinero, tiempo y esfuerzo en la implantación de sistemas de información que, desafortunadamente, nunca terminan por ofrecer los resultados esperados."
      },
      {
        "type": "paragraph",
        "html": "Y cuando esto sucede, es frecuente que las primeras explicaciones apunten hacia el software: que no era el adecuado, que le faltaban funcionalidades, que resultó demasiado complicado o que el proveedor no cumplió con las expectativas."
      },
      {
        "type": "paragraph",
        "html": "Por supuesto, existen sistemas deficientes y proyectos mal ejecutados. Pero estoy convencido de que, en muchos casos, las verdaderas razones del fracaso se encuentran en otro lugar."
      },
      {
        "type": "key",
        "html": "Un sistema puede funcionar perfectamente desde el punto de vista tecnológico y, sin embargo, fracasar como proyecto empresarial."
      },
      {
        "type": "paragraph",
        "html": "¿Por qué sucede esto?"
      },
      {
        "type": "paragraph",
        "html": "Creo que la respuesta tiene que ver con ciertos ingredientes que no pueden faltar en la fórmula del éxito."
      },
      {
        "type": "heading",
        "id": "seccion-1",
        "text": "Primero, hay que conocer la empresa"
      },
      {
        "type": "paragraph",
        "html": "Antes de intentar transformar una organización mediante la tecnología, es indispensable conocerla profundamente."
      },
      {
        "type": "paragraph",
        "html": "Y cuando digo conocerla, no me refiero solamente a identificar sus procesos administrativos, sus procedimientos operativos o sus necesidades de información."
      },
      {
        "type": "paragraph",
        "html": "Me refiero a realizar una verdadera <strong>radiografía empresarial</strong>."
      },
      {
        "type": "paragraph",
        "html": "Una radiografía que permita descubrir las áreas de oportunidad, las ineficiencias y los problemas que necesitan resolverse, pero también identificar aquello que la empresa hace bien."
      },
      {
        "type": "paragraph",
        "html": "Esto último es particularmente importante."
      },
      {
        "type": "paragraph",
        "html": "Con frecuencia, los proyectos de modernización parten de la idea de que todo debe cambiar. Y no necesariamente es así. Las empresas desarrollan, a lo largo de los años, conocimientos, prácticas y formas de trabajar que representan verdaderas fortalezas."
      },
      {
        "type": "key",
        "html": "Tan importante es identificar lo que debemos transformar como reconocer aquello que debemos conservar."
      },
      {
        "type": "paragraph",
        "html": "Pero existe otra dimensión que considero todavía más importante: las personas."
      },
      {
        "type": "paragraph",
        "html": "Una empresa no es solamente un conjunto de procesos, departamentos y sistemas. Es, fundamentalmente, una organización de seres humanos, cada uno con sus conocimientos, experiencias, capacidades, expectativas y formas particulares de hacer las cosas."
      },
      {
        "type": "paragraph",
        "html": "Pretender transformar una empresa sin conocer a su gente es comenzar un proyecto ignorando a quienes finalmente determinarán buena parte de su éxito."
      },
      {
        "type": "paragraph",
        "html": "Y aquí quiero expresar una convicción personal: <strong>la responsabilidad de realizar este proceso de conocimiento previo debe recaer en la empresa que pretende desarrollar o implantar la solución tecnológica.</strong>"
      },
      {
        "type": "paragraph",
        "html": "No considero razonable que un proveedor espere que su cliente le entregue un diagnóstico completo de sus problemas y necesidades para, a partir de ahí, limitarse a ofrecerle un sistema."
      },
      {
        "type": "paragraph",
        "html": "Quien vende un proyecto de esta naturaleza debería comprometerse a conocer profundamente el negocio, comprender sus particularidades, identificar sus fortalezas y debilidades y, muy especialmente, entender a las personas que forman parte de él."
      },
      {
        "type": "paragraph",
        "html": "Solo entonces estará en condiciones de proponer una solución que responda a las verdaderas necesidades de la organización."
      },
      {
        "type": "heading",
        "id": "seccion-2",
        "text": "Segundo, necesitamos liderazgo, no solamente autoridad"
      },
      {
        "type": "paragraph",
        "html": "Otro ingrediente indispensable es el liderazgo."
      },
      {
        "type": "paragraph",
        "html": "Y aquí me parece importante establecer una diferencia entre dirigir un proyecto e inspirar a las personas que participan en él."
      },
      {
        "type": "paragraph",
        "html": "La dirección de una empresa puede decidir que ha llegado el momento de modernizar sus sistemas. Puede contratar proveedores, destinar recursos, establecer fechas y comunicar que, a partir de determinado momento, las cosas deberán hacerse de otra manera."
      },
      {
        "type": "paragraph",
        "html": "Todo eso puede ser necesario, pero no es suficiente."
      },
      {
        "type": "paragraph",
        "html": "Porque una decisión de la dirección no se convierte automáticamente en una convicción de quienes deberán llevarla a la práctica."
      },
      {
        "type": "paragraph",
        "html": "Y aquí es donde considero que el responsable de implantar el sistema tiene uno de sus mayores desafíos."
      },
      {
        "type": "key",
        "html": "Su responsabilidad no debería limitarse a poner en funcionamiento una herramienta tecnológica. También debe ser capaz de conducir el proceso de cambio que su implantación representa."
      },
      {
        "type": "paragraph",
        "html": "Esto exige habilidades que van mucho más allá del conocimiento técnico: comunicación, sensibilidad, capacidad de negociación y, sobre todo, liderazgo."
      },
      {
        "type": "paragraph",
        "html": "Un liderazgo capaz de involucrar a los distintos niveles de la organización, incluyendo a sus directivos, cuyo compromiso y autoridad serán indispensables cuando deban tomarse decisiones importantes."
      },
      {
        "type": "paragraph",
        "html": "Porque el empresario no tiene necesariamente que convertirse en el líder operativo de la transformación, pero sí necesita comprenderla, respaldarla y participar activamente cuando su intervención sea necesaria."
      },
      {
        "type": "paragraph",
        "html": "El verdadero líder del proyecto no solamente explica qué vamos a cambiar. Ayuda a comprender por qué vale la pena hacerlo."
      },
      {
        "type": "heading",
        "id": "seccion-3",
        "text": "Tercero, hay que comprender la resistencia al cambio"
      },
      {
        "type": "paragraph",
        "html": "Quienes hemos participado en proyectos de implantación sabemos que tarde o temprano aparecerán resistencias."
      },
      {
        "type": "paragraph",
        "html": "Y no debería sorprendernos."
      },
      {
        "type": "paragraph",
        "html": "Las personas desarrollamos hábitos, adquirimos experiencia y encontramos maneras de resolver nuestros problemas cotidianos. Con el tiempo, algunas de esas prácticas se convierten en verdaderos vicios organizacionales, mientras que otras representan conocimientos valiosos que sería un error desechar."
      },
      {
        "type": "paragraph",
        "html": "Por eso considero que la resistencia al cambio no debe interpretarse automáticamente como una actitud negativa."
      },
      {
        "type": "paragraph",
        "html": "En ocasiones, detrás de ella existe temor a lo desconocido. En otras, desconfianza hacia experiencias anteriores que no dieron buenos resultados. Y algunas veces, simplemente, una falta de comprensión sobre lo que se pretende conseguir."
      },
      {
        "type": "paragraph",
        "html": "También puede ocurrir que quienes se resisten tengan razones perfectamente válidas que nadie se ha detenido a escuchar."
      },
      {
        "type": "paragraph",
        "html": "Aquí es donde la experiencia del implantador adquiere una importancia fundamental."
      },
      {
        "type": "paragraph",
        "html": "Debe saber escuchar, identificar las causas de esas resistencias y encontrar la manera de sumar voluntades, en lugar de limitarse a exigir el cumplimiento de nuevas instrucciones."
      },
      {
        "type": "paragraph",
        "html": "No se trata de vencer resistencias mediante la autoridad, sino de comprender sus causas y trabajar con las personas para superarlas."
      },
      {
        "type": "paragraph",
        "html": "Y esto nos lleva a lo que considero uno de los principios más importantes de cualquier proceso de transformación."
      },
      {
        "type": "key",
        "html": "El cambio no se implanta, y mucho menos se impone. Se inspira."
      },
      {
        "type": "heading",
        "id": "seccion-4",
        "text": "Cuarto, el verdadero protagonista debe ser el equipo"
      },
      {
        "type": "paragraph",
        "html": "En mi opinión, uno de los mayores errores que podemos cometer al implantar un sistema es pensar que el éxito pertenece a quien lo desarrolla, a quien lo vende o incluso a quien toma la decisión de adquirirlo."
      },
      {
        "type": "paragraph",
        "html": "Un proyecto de esta naturaleza solamente alcanza su verdadero propósito cuando las personas que utilizan el sistema comprenden su valor, participan en su evolución y terminan por hacerlo suyo."
      },
      {
        "type": "paragraph",
        "html": "Cuando dejan de verlo como una herramienta que alguien les obligó a utilizar y comienzan a reconocerlo como un instrumento que les permite trabajar mejor."
      },
      {
        "type": "paragraph",
        "html": "Cuando descubren que sus conocimientos y su experiencia no han sido desplazados por la tecnología, sino que pueden aprovecharse y fortalecerse mediante ella."
      },
      {
        "type": "paragraph",
        "html": "Y, especialmente, cuando comprenden que no son simples destinatarios del cambio, sino sus verdaderos protagonistas."
      },
      {
        "type": "paragraph",
        "html": "Conseguirlo es, precisamente, uno de los grandes retos de quien conduce la implantación."
      },
      {
        "type": "paragraph",
        "html": "Ese es, para mí, uno de los momentos más satisfactorios de cualquier proyecto."
      },
      {
        "type": "paragraph",
        "html": "Porque entonces el cambio deja de depender exclusivamente de quien lo promovió y comienza a sostenerse en las personas que lo hacen posible todos los días."
      },
      {
        "type": "key",
        "html": "El motor del cambio es el propio equipo. Y el mérito definitivo de conseguirlo también debe pertenecerle."
      },
      {
        "type": "heading",
        "id": "seccion-5",
        "text": "Entonces, ¿por qué fracasan los proyectos de sistemas?"
      },
      {
        "type": "paragraph",
        "html": "No existe una respuesta única. Hay proyectos que fracasan por decisiones tecnológicas equivocadas, presupuestos insuficientes, expectativas poco realistas o deficiencias en su ejecución."
      },
      {
        "type": "paragraph",
        "html": "Pero también existen muchos que fracasan porque intentaron incorporar tecnología sin preparar a la organización para aprovecharla."
      },
      {
        "type": "paragraph",
        "html": "Porque no hubo un diagnóstico suficientemente profundo. Porque faltó liderazgo. Porque no se comprendió a las personas. O porque se confundió la implantación de un sistema con la transformación de una empresa."
      },
      {
        "type": "paragraph",
        "html": "Después de tantos años trabajando con organizaciones de diferentes características, sigo convencido de que la tecnología puede ser una extraordinaria herramienta para mejorar su funcionamiento."
      },
      {
        "type": "paragraph",
        "html": "Pero también estoy convencido de que, por sí sola, no es suficiente."
      },
      {
        "type": "key",
        "html": "Antes de transformar una empresa mediante la tecnología, debemos comprenderla. Y antes de pretender cambiar a las personas, debemos conseguir que ellas quieran participar en ese cambio."
      },
      {
        "type": "paragraph",
        "html": "Porque al final, el éxito de un proyecto de sistemas no debería medirse solamente por el día en que comienza a funcionar."
      },
      {
        "type": "paragraph",
        "html": "Debería medirse por lo que la empresa y su gente son capaces de conseguir gracias a él."
      }
    ]
  },
  {
    "number": 2,
    "slug": "por-que-sientes-que-necesitas-un-sistema",
    "title": "¿Por qué sientes que necesitas un sistema?",
    "excerpt": "Una expectativa que no hemos definido con claridad difícilmente podrá convertirse en un resultado que podamos medir.",
    "blocks": [
      {
        "type": "paragraph",
        "html": "Siempre que visito a un empresario interesado en adquirir un sistema de información, o en sustituir el que actualmente utiliza, hay una pregunta que me gusta hacer antes de comenzar a hablar de funcionalidades, tecnologías o precios:"
      },
      {
        "type": "key",
        "html": "¿Por qué sientes que necesitas un sistema?"
      },
      {
        "type": "paragraph",
        "html": "Las respuestas suelen ser muy variadas."
      },
      {
        "type": "paragraph",
        "html": "Algunos empresarios están inconformes con su proveedor actual. Otros han llegado a un punto en el que la operación cotidiana comienza a rebasarlos."
      },
      {
        "type": "paragraph",
        "html": "Y esto último es algo que encuentro particularmente interesante."
      },
      {
        "type": "paragraph",
        "html": "Hay empresas que han crecido gracias al esfuerzo, la experiencia y la capacidad de trabajo de sus propietarios y colaboradores. Durante años han encontrado la manera de sacar adelante sus operaciones, muchas veces con herramientas sencillas, procedimientos informales y una buena dosis de ingenio."
      },
      {
        "type": "paragraph",
        "html": "Pero llega un momento en que aquello que antes funcionaba comienza a resultar insuficiente."
      },
      {
        "type": "paragraph",
        "html": "Los pedidos se multiplican, la información está dispersa, los controles se vuelven cada vez más complicados y el empresario descubre que necesita involucrarse personalmente en demasiadas decisiones para que las cosas sigan funcionando."
      },
      {
        "type": "paragraph",
        "html": "Paradójicamente, <strong>el crecimiento que tanto esfuerzo le costó conseguir comienza a convertirse en una fuente de preocupación.</strong>"
      },
      {
        "type": "paragraph",
        "html": "No necesariamente porque su gente esté haciendo mal las cosas, sino porque la organización y sus herramientas ya no están respondiendo a las exigencias de una empresa que hoy es distinta de aquella que comenzó años atrás."
      },
      {
        "type": "paragraph",
        "html": "Y es entonces cuando surge la necesidad de buscar un sistema que ayude a recuperar el control."
      },
      {
        "type": "paragraph",
        "html": "Es una razón perfectamente válida."
      },
      {
        "type": "paragraph",
        "html": "Sin embargo, cuando profundizamos un poco más en la conversación, con frecuencia descubrimos que, aunque el empresario tiene bastante claro por qué quiere cambiar de sistema, no necesariamente sabe qué espera conseguir con ese cambio."
      },
      {
        "type": "paragraph",
        "html": "Y esa diferencia, que pudiera parecer menor, puede determinar el éxito o el fracaso de todo el proyecto."
      },
      {
        "type": "heading",
        "id": "seccion-1",
        "text": "Las buenas intenciones no son suficientes"
      },
      {
        "type": "paragraph",
        "html": "Es común escuchar que una empresa quiere adquirir un sistema para ser más eficiente, reducir costos, mejorar sus controles o prepararse para crecer."
      },
      {
        "type": "paragraph",
        "html": "Son objetivos razonables. ¿Qué empresario no quisiera conseguirlos?"
      },
      {
        "type": "paragraph",
        "html": "El problema es que estas aspiraciones, por sí solas, nos dicen muy poco."
      },
      {
        "type": "paragraph",
        "html": "¿Qué significa exactamente ser más eficientes?"
      },
      {
        "type": "paragraph",
        "html": "¿Reducir el tiempo necesario para realizar determinadas operaciones? ¿Disminuir los errores? ¿Necesitar menos recursos? ¿Tener información más confiable para tomar decisiones?"
      },
      {
        "type": "paragraph",
        "html": "Y, sobre todo, ¿en qué medida esperamos mejorar?"
      },
      {
        "type": "paragraph",
        "html": "No es lo mismo decir que queremos agilizar el proceso de facturación que establecer que deseamos reducir de quince a cinco minutos el tiempo necesario para completar una operación."
      },
      {
        "type": "paragraph",
        "html": "En el primer caso tenemos una intención. En el segundo, un objetivo que podemos evaluar."
      },
      {
        "type": "key",
        "html": "Una expectativa que no hemos definido con claridad difícilmente podrá convertirse en un resultado que podamos medir."
      },
      {
        "type": "paragraph",
        "html": "Y aquí comienza una de las responsabilidades más importantes de quien pretende vender e implantar un sistema empresarial."
      },
      {
        "type": "heading",
        "id": "seccion-2",
        "text": "El proveedor también debe ayudar a definir el destino"
      },
      {
        "type": "paragraph",
        "html": "Estoy convencido de que no es razonable esperar que un empresario llegue a la primera reunión con un proveedor de tecnología teniendo perfectamente identificados todos sus problemas, sus necesidades y los resultados que desea conseguir."
      },
      {
        "type": "paragraph",
        "html": "Si así fuera, buena parte del trabajo de consultoría ya estaría hecho."
      },
      {
        "type": "paragraph",
        "html": "El empresario conoce su negocio, sus dificultades y sus aspiraciones. Pero no necesariamente tiene por qué conocer todas las posibilidades que ofrece la tecnología, ni mucho menos saber cómo traducir esas posibilidades en objetivos concretos."
      },
      {
        "type": "key",
        "html": "Esa es una responsabilidad que el proveedor debe estar dispuesto a compartir y, en buena medida, a conducir."
      },
      {
        "type": "paragraph",
        "html": "No basta con escuchar una lista de requerimientos, confirmar que el sistema cuenta con determinadas funcionalidades y preparar una propuesta económica."
      },
      {
        "type": "paragraph",
        "html": "Es necesario comprender qué pretende conseguir la empresa y ayudar a sus directivos a convertir sus expectativas en objetivos claros, realistas y, siempre que sea posible, medibles."
      },
      {
        "type": "paragraph",
        "html": "A este proceso me gusta llamarlo <em>nivelar expectativas</em>."
      },
      {
        "type": "paragraph",
        "html": "Y no significa convencer al cliente de conformarse con lo que el sistema puede ofrecer."
      },
      {
        "type": "paragraph",
        "html": "Significa conseguir que ambas partes compartan una visión clara de lo que se pretende lograr, de lo que será necesario hacer para conseguirlo y de las responsabilidades que cada una deberá asumir."
      },
      {
        "type": "paragraph",
        "html": "Porque un proyecto puede cumplir con todas las funcionalidades contratadas y, aun así, dejar insatisfecho al cliente."
      },
      {
        "type": "paragraph",
        "html": "Y también puede ocurrir lo contrario: que se consigan mejoras extraordinarias que nadie se detenga a reconocer porque nunca se estableció con claridad qué resultados se estaban buscando."
      },
      {
        "type": "heading",
        "id": "seccion-3",
        "text": "¿Cómo sabremos si tuvimos éxito?"
      },
      {
        "type": "paragraph",
        "html": "Esta es una pregunta que considero indispensable plantear antes de comenzar cualquier proyecto."
      },
      {
        "type": "paragraph",
        "html": "Imaginemos que una empresa invierte en un sistema para mejorar el control de sus inventarios."
      },
      {
        "type": "paragraph",
        "html": "Después de varios meses, el sistema está funcionando. Los productos están registrados, las entradas y salidas se capturan correctamente y los usuarios han aprendido a utilizarlo."
      },
      {
        "type": "paragraph",
        "html": "Desde el punto de vista tecnológico, la implantación podría considerarse terminada."
      },
      {
        "type": "paragraph",
        "html": "Pero ¿se redujeron las diferencias de inventario? ¿Disminuyeron las compras innecesarias? ¿Mejoró la disponibilidad de productos? ¿Ahora se toman mejores decisiones de abastecimiento?"
      },
      {
        "type": "paragraph",
        "html": "Esas son algunas de las preguntas que realmente nos permitirían evaluar los resultados empresariales del proyecto."
      },
      {
        "type": "paragraph",
        "html": "Y para responderlas necesitamos conocer también el punto de partida."
      },
      {
        "type": "paragraph",
        "html": "No podemos afirmar que mejoramos algo si nunca nos preocupamos por conocer cómo estábamos antes."
      },
      {
        "type": "paragraph",
        "html": "Por eso, definir las expectativas implica establecer no solamente hacia dónde queremos llegar, sino también desde dónde estamos comenzando."
      },
      {
        "type": "heading",
        "id": "seccion-4",
        "text": "También hay que hablar de lo que el sistema no hará"
      },
      {
        "type": "paragraph",
        "html": "Hay otro aspecto que considero fundamental y que, en ocasiones, puede resultar incómodo durante el proceso comercial."
      },
      {
        "type": "key",
        "html": "Un buen proveedor debe tener la disposición de explicar con toda claridad lo que su sistema puede hacer, pero también aquello que no puede resolver."
      },
      {
        "type": "paragraph",
        "html": "La tecnología tiene posibilidades extraordinarias, pero también tiene limitaciones."
      },
      {
        "type": "paragraph",
        "html": "Un sistema puede proporcionar información oportuna, pero no garantiza que alguien tome buenas decisiones con ella."
      },
      {
        "type": "paragraph",
        "html": "Puede establecer controles, pero no sustituye la responsabilidad de quienes deben cumplirlos."
      },
      {
        "type": "paragraph",
        "html": "Puede automatizar procedimientos, pero no necesariamente corregirá las deficiencias de organización que existían antes de su llegada."
      },
      {
        "type": "paragraph",
        "html": "Y algunas mejoras dependerán de cambios que la propia empresa tendrá que realizar en su manera de trabajar."
      },
      {
        "type": "paragraph",
        "html": "Ocultar estas realidades para facilitar una venta puede generar expectativas que tarde o temprano terminarán convirtiéndose en frustraciones."
      },
      {
        "type": "paragraph",
        "html": "Prefiero pensar que la confianza entre el cliente y su proveedor comienza precisamente cuando ambos pueden hablar con claridad de lo que es posible conseguir y de lo que no."
      },
      {
        "type": "heading",
        "id": "seccion-5",
        "text": "¿Y si decidimos no hacer nada?"
      },
      {
        "type": "paragraph",
        "html": "Hay una pregunta adicional que me gusta incorporar a este tipo de conversaciones:"
      },
      {
        "type": "key",
        "html": "¿Qué sucedería si la empresa decidiera continuar trabajando exactamente como lo hace hoy?"
      },
      {
        "type": "paragraph",
        "html": "Me parece importante porque no todos los proyectos deben justificarse exclusivamente por una reducción inmediata de costos o por un incremento de productividad."
      },
      {
        "type": "paragraph",
        "html": "A veces, el verdadero beneficio de modernizar un sistema consiste en preparar a la empresa para un crecimiento que sus herramientas actuales no podrían soportar."
      },
      {
        "type": "paragraph",
        "html": "En otras ocasiones, se trata de reducir riesgos, evitar la dependencia de ciertas personas, mejorar la confiabilidad de la información o impedir que determinados problemas continúen agravándose."
      },
      {
        "type": "paragraph",
        "html": "Incluso puede suceder que, después de analizar la situación, descubramos que la empresa no necesita cambiar de sistema, sino aprovechar mejor el que ya tiene."
      },
      {
        "type": "paragraph",
        "html": "Y si esa es la conclusión, también deberíamos estar dispuestos a reconocerla."
      },
      {
        "type": "paragraph",
        "html": "Porque el propósito de una buena asesoría no debería ser justificar a toda costa la adquisición de tecnología, sino ayudar a la empresa a tomar la decisión que más le convenga."
      },
      {
        "type": "heading",
        "id": "seccion-6",
        "text": "El éxito comienza mucho antes de la implantación"
      },
      {
        "type": "paragraph",
        "html": "A lo largo de mi experiencia he aprendido que una de las conversaciones más valiosas entre un empresario y su proveedor de tecnología ocurre antes de que se haya instalado una sola línea de software."
      },
      {
        "type": "paragraph",
        "html": "Es aquella en la que ambos consiguen ponerse de acuerdo sobre lo que realmente necesita la organización, qué resultados esperan alcanzar y cómo sabrán que los han conseguido."
      },
      {
        "type": "paragraph",
        "html": "Esta claridad no elimina los riesgos ni garantiza que todo salga exactamente como se planeó."
      },
      {
        "type": "paragraph",
        "html": "Pero proporciona algo indispensable: un rumbo compartido."
      },
      {
        "type": "paragraph",
        "html": "Y cuando ese rumbo existe, resulta mucho más sencillo tomar decisiones, establecer prioridades, resolver diferencias y evaluar los resultados."
      },
      {
        "type": "key",
        "html": "El éxito de un proyecto no debería definirse al terminar su implantación. Debería comenzar a definirse antes de contratarlo."
      },
      {
        "type": "paragraph",
        "html": "Porque, al final, adquirir un sistema no es el objetivo."
      },
      {
        "type": "paragraph",
        "html": "El objetivo es conseguir que la empresa funcione mejor gracias a él."
      }
    ]
  },
  {
    "number": 3,
    "slug": "tu-sistema-esta-ayudando-a-que-tu-empresa-funcione-mejor",
    "title": "¿Tu sistema está ayudando a que tu empresa funcione mejor?",
    "excerpt": "Tener un sistema no significa necesariamente tener una empresa bien organizada.",
    "blocks": [
      {
        "type": "paragraph",
        "html": "Hay una pregunta que me parece interesante hacer a cualquier empresario, independientemente de si su empresa cuenta con un sistema administrativo desde hace muchos años o apenas está considerando adquirir uno:"
      },
      {
        "type": "key",
        "html": "¿Qué tan bien está funcionando realmente tu empresa?"
      },
      {
        "type": "paragraph",
        "html": "La respuesta no siempre es sencilla."
      },
      {
        "type": "paragraph",
        "html": "Es posible que las ventas estén creciendo, que los clientes estén satisfechos y que, en términos generales, las cosas marchen razonablemente bien."
      },
      {
        "type": "paragraph",
        "html": "Pero eso no significa necesariamente que la empresa esté aprovechando todo su potencial."
      },
      {
        "type": "paragraph",
        "html": "Pensemos, por ejemplo, en el seguimiento de las oportunidades comerciales."
      },
      {
        "type": "paragraph",
        "html": "Quizá algunas cotizaciones nunca reciben seguimiento. Otras sí, pero las respuestas llegan demasiado tarde. Un prospecto solicita información y transcurre un día, o incluso dos, antes de que alguien lo atienda."
      },
      {
        "type": "paragraph",
        "html": "Desde la perspectiva de la empresa, el vendedor está haciendo su trabajo: responde mensajes, prepara cotizaciones y mantiene contacto con sus prospectos."
      },
      {
        "type": "paragraph",
        "html": "Pero desde la perspectiva del cliente, la experiencia puede ser muy diferente. Una respuesta tardía puede transmitir desinterés, falta de organización o poca disposición para atenderlo."
      },
      {
        "type": "paragraph",
        "html": "Y lo más preocupante es que la empresa podría no estar consciente de cuántas oportunidades está perdiendo por estas razones."
      },
      {
        "type": "key",
        "html": "Las ventas pueden estar creciendo y, aun así, estar muy por debajo de lo que la empresa realmente podría conseguir."
      },
      {
        "type": "paragraph",
        "html": "Lo mismo puede estar ocurriendo en otras áreas del negocio, sin que necesariamente existan problemas evidentes."
      },
      {
        "type": "paragraph",
        "html": "Cuando observo con mayor detenimiento, encuentro situaciones que cuentan una historia diferente."
      },
      {
        "type": "paragraph",
        "html": "Hay información que tarda demasiado en conseguirse. Operaciones que dependen de la intervención de una persona en particular. Datos que deben capturarse varias veces. Decisiones que se toman sin contar con todos los elementos necesarios. Procedimientos que cada empleado realiza de una manera distinta."
      },
      {
        "type": "paragraph",
        "html": "Y, curiosamente, muchas de estas situaciones pueden existir incluso en empresas que han invertido cantidades importantes de dinero en tecnología."
      },
      {
        "type": "paragraph",
        "html": "Esto me lleva a una reflexión que considero fundamental:"
      },
      {
        "type": "key",
        "html": "Tener un sistema no significa necesariamente tener una empresa bien organizada."
      },
      {
        "type": "heading",
        "id": "seccion-1",
        "text": "Cuando el sistema funciona, pero la organización no tanto"
      },
      {
        "type": "paragraph",
        "html": "A lo largo de mi experiencia he encontrado empresas que cuentan con sistemas capaces de realizar prácticamente todas las operaciones que necesitan."
      },
      {
        "type": "paragraph",
        "html": "Registran sus ventas, administran sus compras, controlan sus inventarios, llevan sus cuentas por cobrar y generan una gran variedad de reportes."
      },
      {
        "type": "paragraph",
        "html": "Sin embargo, cuando me acerco a la operación cotidiana, descubro que una parte importante del trabajo continúa realizándose fuera del sistema."
      },
      {
        "type": "paragraph",
        "html": "Se utilizan hojas de cálculo para llevar controles paralelos. Se intercambian mensajes para confirmar información que debería estar disponible. Se elaboran reportes manuales porque los existentes no se consideran confiables. Y ciertas decisiones siguen dependiendo de que el propietario esté presente para autorizarlas."
      },
      {
        "type": "paragraph",
        "html": "No necesariamente estamos frente a un mal sistema."
      },
      {
        "type": "paragraph",
        "html": "En ocasiones, el problema es que la empresa nunca terminó de definir cómo quería trabajar con él."
      },
      {
        "type": "paragraph",
        "html": "En otras, los procedimientos fueron cambiando con los años, pero nadie se detuvo a revisar si las herramientas y los controles seguían respondiendo a las nuevas necesidades."
      },
      {
        "type": "paragraph",
        "html": "Y también puede ocurrir que el sistema tenga limitaciones reales que obliguen a las personas a encontrar soluciones por su cuenta."
      },
      {
        "type": "paragraph",
        "html": "Lo importante es no apresurarnos a señalar culpables."
      },
      {
        "type": "key",
        "html": "Antes de concluir que necesitamos cambiar de tecnología, conviene entender por qué estamos trabajando de esa manera."
      },
      {
        "type": "heading",
        "id": "seccion-2",
        "text": "Los procesos no deberían depender de la memoria de las personas"
      },
      {
        "type": "paragraph",
        "html": "Pensemos en una situación relativamente común."
      },
      {
        "type": "paragraph",
        "html": "Una empresa recibe un pedido de un cliente. Alguien verifica la disponibilidad de los productos, otra persona revisa las condiciones comerciales y una tercera se encarga de organizar la entrega."
      },
      {
        "type": "paragraph",
        "html": "Hasta aquí, nada extraordinario."
      },
      {
        "type": "paragraph",
        "html": "Pero ¿qué sucede cuando la persona que normalmente coordina estas actividades se ausenta?"
      },
      {
        "type": "paragraph",
        "html": "Quizá nadie sabe con certeza en qué etapa se encuentra el pedido. Tal vez las condiciones acordadas con el cliente solamente las conoce quien realizó la venta. O puede ocurrir que la entrega dependa de instrucciones que nunca quedaron registradas."
      },
      {
        "type": "paragraph",
        "html": "El problema no es necesariamente la falta de compromiso de los empleados."
      },
      {
        "type": "paragraph",
        "html": "Con frecuencia sucede exactamente lo contrario: <strong>la operación funciona gracias al esfuerzo extraordinario de personas que han aprendido a resolver problemas que la propia organización no ha terminado de resolver.</strong>"
      },
      {
        "type": "paragraph",
        "html": "Y aunque ese esfuerzo merece reconocimiento, también representa un riesgo."
      },
      {
        "type": "paragraph",
        "html": "Una empresa no debería depender de que determinadas personas recuerden todo, estén disponibles en todo momento o tengan que intervenir constantemente para que las cosas sucedan."
      },
      {
        "type": "paragraph",
        "html": "Los procesos necesitan cierta claridad: quién hace qué, cuándo debe hacerlo, qué información necesita y cómo sabemos que la actividad se realizó correctamente."
      },
      {
        "type": "paragraph",
        "html": "Un sistema puede contribuir enormemente a establecer ese orden."
      },
      {
        "type": "paragraph",
        "html": "Pero difícilmente podrá hacerlo si nadie ha definido primero cuáles son las reglas con las que queremos trabajar."
      },
      {
        "type": "heading",
        "id": "seccion-3",
        "text": "No todo lo que hacemos desde hace años sigue siendo necesario"
      },
      {
        "type": "paragraph",
        "html": "Hay otra situación que encuentro particularmente interesante."
      },
      {
        "type": "paragraph",
        "html": "Cuando una empresa incorpora un sistema, es frecuente que intente reproducir dentro de él exactamente la misma manera en que ha venido trabajando."
      },
      {
        "type": "paragraph",
        "html": "Y es comprensible."
      },
      {
        "type": "paragraph",
        "html": "Los procedimientos conocidos proporcionan seguridad. Las personas saben cómo realizarlos y, después de todo, han permitido que la empresa llegue hasta donde está."
      },
      {
        "type": "paragraph",
        "html": "Pero vale la pena preguntarnos algo:"
      },
      {
        "type": "key",
        "html": "¿Seguimos haciendo las cosas de cierta manera porque es la mejor, o simplemente porque es la que conocemos?"
      },
      {
        "type": "paragraph",
        "html": "Tal vez un documento pasa por cuatro personas para ser autorizado porque hace años era necesario. Quizá se elaboran reportes que nadie consulta. O se captura la misma información en diferentes lugares porque así se estableció cuando los sistemas no estaban conectados."
      },
      {
        "type": "paragraph",
        "html": "No estoy sugiriendo que debamos eliminar procedimientos por el simple hecho de que sean antiguos."
      },
      {
        "type": "paragraph",
        "html": "Muchas prácticas que han demostrado funcionar merecen conservarse."
      },
      {
        "type": "paragraph",
        "html": "Lo que propongo es revisar periódicamente si siguen teniendo sentido."
      },
      {
        "type": "paragraph",
        "html": "La tecnología ofrece oportunidades para simplificar actividades, reducir errores y facilitar la colaboración entre distintas áreas. Pero esas oportunidades pueden perderse cuando nos limitamos a trasladar procedimientos existentes a una pantalla."
      },
      {
        "type": "key",
        "html": "Modernizar una empresa no consiste en hacer lo mismo con herramientas más nuevas. Consiste en encontrar mejores maneras de trabajar, aprovechando lo que ya hacemos bien."
      },
      {
        "type": "heading",
        "id": "seccion-4",
        "text": "La información debe servir para tomar decisiones"
      },
      {
        "type": "paragraph",
        "html": "Uno de los beneficios más importantes de los sistemas empresariales es su capacidad para reunir información."
      },
      {
        "type": "paragraph",
        "html": "Sin embargo, disponer de muchos datos no significa necesariamente contar con información útil."
      },
      {
        "type": "paragraph",
        "html": "Una empresa puede generar decenas de reportes y, aun así, tener dificultades para responder preguntas fundamentales."
      },
      {
        "type": "paragraph",
        "html": "¿Cuáles son nuestros productos más rentables?"
      },
      {
        "type": "paragraph",
        "html": "¿Qué clientes están comprando menos que antes?"
      },
      {
        "type": "paragraph",
        "html": "¿Dónde se están acumulando inventarios innecesarios?"
      },
      {
        "type": "paragraph",
        "html": "¿Qué operaciones están consumiendo más tiempo del que deberían?"
      },
      {
        "type": "paragraph",
        "html": "¿En qué parte del proceso se están produciendo los retrasos?"
      },
      {
        "type": "paragraph",
        "html": "En ocasiones, la información existe, pero está dispersa. En otras, los datos no son confiables porque los procedimientos de captura no se siguen de manera consistente."
      },
      {
        "type": "paragraph",
        "html": "También sucede que los reportes están disponibles, pero nadie tiene claramente asignada la responsabilidad de revisarlos y actuar en consecuencia."
      },
      {
        "type": "paragraph",
        "html": "Aquí aparece otra distinción importante."
      },
      {
        "type": "key",
        "html": "El valor de la información no está solamente en obtenerla, sino en lo que la empresa es capaz de hacer con ella."
      },
      {
        "type": "paragraph",
        "html": "Un sistema puede ayudarnos a identificar un problema. Pero reconocerlo, tomar una decisión y darle seguimiento sigue siendo responsabilidad de las personas."
      },
      {
        "type": "paragraph",
        "html": "Por eso, mejorar el aprovechamiento de la tecnología también implica revisar cómo se toman las decisiones dentro de la organización."
      },
      {
        "type": "heading",
        "id": "seccion-5",
        "text": "La organización debe evolucionar junto con la empresa"
      },
      {
        "type": "paragraph",
        "html": "Una empresa que hoy tiene cincuenta empleados probablemente no puede funcionar exactamente de la misma manera que cuando tenía cinco."
      },
      {
        "type": "paragraph",
        "html": "Y, sin embargo, muchas organizaciones conservan durante años prácticas que surgieron cuando su tamaño y complejidad eran completamente distintos."
      },
      {
        "type": "paragraph",
        "html": "El propietario continúa autorizando operaciones rutinarias. La información sigue concentrada en unas cuantas personas. Las responsabilidades no siempre están claramente delimitadas y los controles se van agregando conforme aparecen problemas."
      },
      {
        "type": "paragraph",
        "html": "Nada de esto significa que la empresa haya sido mal administrada desde sus inicios."
      },
      {
        "type": "paragraph",
        "html": "Por el contrario, muchas de esas prácticas pudieron haber sido perfectamente adecuadas en su momento."
      },
      {
        "type": "paragraph",
        "html": "El problema aparece cuando <strong>la organización deja de evolucionar al mismo ritmo que el negocio</strong>."
      },
      {
        "type": "paragraph",
        "html": "En ese escenario, la tecnología puede convertirse en un extraordinario aliado."
      },
      {
        "type": "paragraph",
        "html": "Puede facilitar la delegación de responsabilidades, establecer controles, dar visibilidad a las operaciones y proporcionar información oportuna."
      },
      {
        "type": "paragraph",
        "html": "Pero para aprovechar esas posibilidades es necesario que la empresa esté dispuesta a revisar su propia manera de trabajar."
      },
      {
        "type": "paragraph",
        "html": "Y esa revisión no tiene por qué convertirse en una transformación radical."
      },
      {
        "type": "paragraph",
        "html": "A veces, pequeñas mejoras bien identificadas y ejecutadas producen resultados mucho más valiosos que grandes proyectos de cambio que nadie termina de adoptar."
      },
      {
        "type": "heading",
        "id": "seccion-6",
        "text": "Antes de cambiar el sistema, entendamos el problema"
      },
      {
        "type": "paragraph",
        "html": "Cuando una empresa comienza a experimentar dificultades operativas, es natural que se pregunte si ha llegado el momento de sustituir su sistema."
      },
      {
        "type": "paragraph",
        "html": "En ocasiones, la respuesta será afirmativa."
      },
      {
        "type": "paragraph",
        "html": "Hay herramientas que dejan de responder a las necesidades del negocio. Otras presentan limitaciones que dificultan el crecimiento. Y también existen sistemas que, sencillamente, nunca fueron adecuados para la operación que debían atender."
      },
      {
        "type": "paragraph",
        "html": "Pero hay situaciones en las que cambiar de tecnología no resolverá el problema de fondo."
      },
      {
        "type": "paragraph",
        "html": "Si las responsabilidades no están claras, si los procedimientos son inconsistentes o si la información no se registra correctamente, existe el riesgo de reproducir esas mismas dificultades en una plataforma diferente."
      },
      {
        "type": "paragraph",
        "html": "Por eso considero tan importante analizar la empresa antes de recomendar una solución."
      },
      {
        "type": "paragraph",
        "html": "No solamente para identificar lo que está fallando, sino también para reconocer aquello que funciona bien y merece conservarse, así como las oportunidades de mejora que podrían estar pasando inadvertidas."
      },
      {
        "type": "paragraph",
        "html": "A veces descubro que el sistema actual tiene capacidades que no se están aprovechando."
      },
      {
        "type": "paragraph",
        "html": "Otras veces encuentro oportunidades para mejorar procedimientos sin necesidad de sustituir ninguna herramienta."
      },
      {
        "type": "paragraph",
        "html": "Y hay ocasiones en las que una nueva solución tecnológica es precisamente lo que la organización necesita para dar el siguiente paso."
      },
      {
        "type": "paragraph",
        "html": "Lo importante es que la decisión sea consecuencia de haber comprendido el problema y las oportunidades, no solamente de haber identificado sus síntomas."
      },
      {
        "type": "heading",
        "id": "seccion-7",
        "text": "La verdadera medida de un buen sistema"
      },
      {
        "type": "paragraph",
        "html": "Me parece que deberíamos evaluar nuestros sistemas empresariales con una perspectiva más amplia que la de sus funcionalidades."
      },
      {
        "type": "paragraph",
        "html": "Por supuesto que importa que sean confiables, que realicen correctamente sus operaciones y que proporcionen las herramientas necesarias."
      },
      {
        "type": "paragraph",
        "html": "Pero también deberíamos preguntarnos si están contribuyendo a que las personas trabajen mejor."
      },
      {
        "type": "paragraph",
        "html": "Si ayudan a reducir tareas innecesarias."
      },
      {
        "type": "paragraph",
        "html": "Si facilitan la coordinación entre las distintas áreas."
      },
      {
        "type": "paragraph",
        "html": "Si permiten que la información llegue oportunamente a quienes la necesitan."
      },
      {
        "type": "paragraph",
        "html": "Si ayudan a descubrir oportunidades comerciales que hoy se pierden o se atienden demasiado tarde."
      },
      {
        "type": "paragraph",
        "html": "Si hacen posible que el empresario dedique menos tiempo a resolver problemas cotidianos y más a dirigir su negocio."
      },
      {
        "type": "paragraph",
        "html": "Porque, finalmente, <strong>la tecnología no debería convertirse en el centro de la organización. Debería estar al servicio de ella.</strong>"
      },
      {
        "type": "paragraph",
        "html": "Y cuando conseguimos que los procesos, las personas y las herramientas trabajen de manera coordinada, el beneficio va mucho más allá de contar con un buen sistema."
      },
      {
        "type": "paragraph",
        "html": "Estamos construyendo una empresa que puede funcionar mejor, aprovechar más oportunidades, tomar mejores decisiones y enfrentar su crecimiento con mayor confianza."
      }
    ]
  },
  {
    "number": 4,
    "slug": "implantar-un-sistema-es-mucho-mas-que-instalar-software",
    "title": "Implantar un sistema es mucho más que instalar software",
    "excerpt": "La puesta en marcha es un acontecimiento importante, pero no debería confundirse con la obtención de resultados.",
    "blocks": [
      {
        "type": "paragraph",
        "html": "Recuerdo que, durante muchos años, una de las preguntas más frecuentes que escuchaba al hablar de un nuevo sistema empresarial era cuánto tiempo tomaría instalarlo."
      },
      {
        "type": "paragraph",
        "html": "Era una pregunta perfectamente comprensible. Después de todo, cuando una empresa adquiere una herramienta tecnológica, quiere saber cuándo podrá comenzar a utilizarla."
      },
      {
        "type": "paragraph",
        "html": "Sin embargo, con el paso del tiempo he llegado a considerar que hay una pregunta mucho más importante:"
      },
      {
        "type": "key",
        "html": "¿Cuánto tiempo tomará conseguir que la empresa trabaje mejor gracias a ese sistema?"
      },
      {
        "type": "paragraph",
        "html": "La diferencia entre ambas preguntas puede parecer sutil, pero es enorme."
      },
      {
        "type": "paragraph",
        "html": "Instalar un programa, configurar sus parámetros, registrar usuarios y comenzar a capturar operaciones son actividades necesarias. Algunas pueden ser relativamente sencillas; otras, bastante complejas."
      },
      {
        "type": "paragraph",
        "html": "Pero ninguna de ellas, por sí sola, garantiza que la empresa vaya a obtener los beneficios que esperaba."
      },
      {
        "type": "paragraph",
        "html": "Porque una cosa es conseguir que un sistema funcione y otra muy distinta es conseguir que una organización funcione mejor con él."
      },
      {
        "type": "heading",
        "id": "seccion-1",
        "text": "La puesta en marcha no es la meta"
      },
      {
        "type": "paragraph",
        "html": "En los proyectos tecnológicos solemos establecer fechas importantes."
      },
      {
        "type": "paragraph",
        "html": "La entrega del sistema. La capacitación de los usuarios. La migración de información. El inicio de operaciones."
      },
      {
        "type": "paragraph",
        "html": "Todas son necesarias para organizar el trabajo y evaluar su avance."
      },
      {
        "type": "paragraph",
        "html": "El problema aparece cuando confundimos alguna de esas fechas con la conclusión del proyecto."
      },
      {
        "type": "paragraph",
        "html": "Imaginemos que una empresa comienza a utilizar su nuevo sistema el lunes por la mañana."
      },
      {
        "type": "paragraph",
        "html": "Los usuarios pueden ingresar, las operaciones se registran correctamente y los documentos se generan sin inconvenientes."
      },
      {
        "type": "paragraph",
        "html": "Desde el punto de vista técnico, podríamos decir que la puesta en marcha fue exitosa."
      },
      {
        "type": "paragraph",
        "html": "Pero ¿qué sucede durante las siguientes semanas?"
      },
      {
        "type": "paragraph",
        "html": "¿Los empleados están utilizando el sistema con seguridad? ¿Han dejado de llevar controles paralelos? ¿Los responsables de cada área cuentan con la información que necesitan? ¿Los procedimientos realmente se están siguiendo como fueron definidos?"
      },
      {
        "type": "paragraph",
        "html": "Y, sobre todo, ¿están comenzando a observarse las mejoras que justificaron el proyecto?"
      },
      {
        "type": "paragraph",
        "html": "Esas respuestas no siempre aparecen el primer día."
      },
      {
        "type": "paragraph",
        "html": "Algunas requieren semanas. Otras, meses."
      },
      {
        "type": "key",
        "html": "La puesta en marcha es un acontecimiento importante, pero no debería confundirse con la obtención de resultados."
      },
      {
        "type": "heading",
        "id": "seccion-2",
        "text": "Las personas no son una actividad más del proyecto"
      },
      {
        "type": "paragraph",
        "html": "Con frecuencia encuentro planes de implantación en los que la participación de los empleados aparece concentrada en una etapa llamada <em>capacitación</em>."
      },
      {
        "type": "paragraph",
        "html": "Se programan algunas sesiones, se explica cómo utilizar las pantallas y se espera que, a partir de ese momento, todos comiencen a trabajar de la nueva manera."
      },
      {
        "type": "paragraph",
        "html": "Pero aprender a utilizar un sistema y sentirse preparado para cambiar la forma de trabajar son dos cosas diferentes."
      },
      {
        "type": "paragraph",
        "html": "Un empleado puede comprender perfectamente cómo registrar una operación y, aun así, tener dudas sobre lo que se espera de él."
      },
      {
        "type": "paragraph",
        "html": "Quizá ahora deba capturar información que antes no registraba. Tal vez una actividad que realizaba de manera independiente pasará a depender de otra área. O puede ocurrir que ciertos controles hagan más visible su trabajo y eso le genere preocupación."
      },
      {
        "type": "paragraph",
        "html": "No todas esas inquietudes son resistencia al cambio."
      },
      {
        "type": "paragraph",
        "html": "Algunas son preguntas legítimas que merecen respuestas claras."
      },
      {
        "type": "paragraph",
        "html": "Otras revelan problemas que no se habían considerado durante el diseño del proyecto."
      },
      {
        "type": "paragraph",
        "html": "Y algunas pueden ayudarnos a descubrir que determinado procedimiento, aunque parezca correcto sobre el papel, no funciona tan bien en la práctica."
      },
      {
        "type": "paragraph",
        "html": "Por eso considero indispensable escuchar a quienes realizan las operaciones todos los días."
      },
      {
        "type": "key",
        "html": "Las personas no deberían enterarse al final de cómo van a trabajar. Deberían participar en la construcción de esa nueva manera de hacerlo."
      },
      {
        "type": "heading",
        "id": "seccion-3",
        "text": "El conocimiento de la empresa no está solamente en sus directivos"
      },
      {
        "type": "paragraph",
        "html": "Cuando comienzo a conocer una organización, naturalmente necesito conversar con sus propietarios y responsables."
      },
      {
        "type": "paragraph",
        "html": "Ellos conocen las prioridades del negocio, los problemas que les preocupan y los resultados que desean alcanzar."
      },
      {
        "type": "paragraph",
        "html": "Pero también he aprendido que una parte extraordinariamente valiosa del conocimiento de una empresa se encuentra entre quienes ejecutan sus operaciones cotidianas."
      },
      {
        "type": "paragraph",
        "html": "La persona que recibe mercancías sabe qué situaciones complican una recepción."
      },
      {
        "type": "paragraph",
        "html": "Quien prepara los pedidos conoce los errores que suelen presentarse antes de una entrega."
      },
      {
        "type": "paragraph",
        "html": "El responsable de cobranza puede explicar por qué ciertas facturas terminan convirtiéndose en problemas."
      },
      {
        "type": "paragraph",
        "html": "Y un vendedor probablemente sabe qué información necesita con urgencia cuando está frente a un cliente."
      },
      {
        "type": "paragraph",
        "html": "Escuchar estas experiencias no significa que todas las sugerencias deban convertirse automáticamente en modificaciones al sistema."
      },
      {
        "type": "paragraph",
        "html": "Significa reconocer que difícilmente podremos mejorar un proceso si no comprendemos cómo funciona realmente."
      },
      {
        "type": "paragraph",
        "html": "En ocasiones, lo que descubro en esas conversaciones es muy diferente de lo que inicialmente me habían explicado."
      },
      {
        "type": "paragraph",
        "html": "No necesariamente porque alguien haya proporcionado información equivocada, sino porque <strong>existe una diferencia entre la manera en que creemos que funciona una empresa y la manera en que sus operaciones suceden todos los días</strong>."
      },
      {
        "type": "paragraph",
        "html": "Esa diferencia merece toda nuestra atención."
      },
      {
        "type": "heading",
        "id": "seccion-4",
        "text": "La capacitación debe tener sentido para quien aprende"
      },
      {
        "type": "paragraph",
        "html": "He visto que una capacitación puede ser técnicamente correcta y, sin embargo, resultar poco útil."
      },
      {
        "type": "paragraph",
        "html": "Esto ocurre cuando nos concentramos en explicar todas las funcionalidades de un sistema sin relacionarlas suficientemente con el trabajo de las personas."
      },
      {
        "type": "paragraph",
        "html": "Podemos dedicar horas a mostrar menús, botones y opciones. Pero si el usuario no comprende cómo esas herramientas le ayudarán a realizar sus actividades, probablemente olvidará buena parte de lo aprendido."
      },
      {
        "type": "paragraph",
        "html": "Prefiero que la capacitación parta de situaciones que las personas reconocen."
      },
      {
        "type": "paragraph",
        "html": "¿Cómo registramos un pedido que requiere una entrega parcial?"
      },
      {
        "type": "paragraph",
        "html": "¿Qué hacemos cuando llega mercancía diferente de la solicitada?"
      },
      {
        "type": "paragraph",
        "html": "¿Cómo identificamos una factura pendiente de cobro?"
      },
      {
        "type": "paragraph",
        "html": "¿Qué ocurre cuando necesitamos corregir una operación?"
      },
      {
        "type": "paragraph",
        "html": "Cuando trabajamos con ejemplos cercanos a la realidad de la empresa, el aprendizaje adquiere otro sentido."
      },
      {
        "type": "paragraph",
        "html": "El usuario deja de preguntarse para qué sirve determinada función y comienza a comprender cómo puede utilizarla para resolver situaciones que conoce."
      },
      {
        "type": "paragraph",
        "html": "Y hay algo más: no todas las personas aprenden al mismo ritmo ni necesitan el mismo tipo de acompañamiento."
      },
      {
        "type": "paragraph",
        "html": "Algunas se sienten cómodas explorando nuevas herramientas. Otras necesitan practicar varias veces antes de adquirir seguridad."
      },
      {
        "type": "paragraph",
        "html": "Eso no debería convertirse en motivo de impaciencia."
      },
      {
        "type": "key",
        "html": "El propósito de capacitar no es demostrar cuánto sabe quien enseña, sino conseguir que quien aprende pueda trabajar con confianza."
      },
      {
        "type": "heading",
        "id": "seccion-5",
        "text": "El proveedor no puede desaparecer después de la instalación"
      },
      {
        "type": "paragraph",
        "html": "Este es uno de los aspectos sobre los que tengo una convicción más firme."
      },
      {
        "type": "paragraph",
        "html": "Quien vende e implanta un sistema empresarial asume una responsabilidad que va más allá de entregar tecnología."
      },
      {
        "type": "paragraph",
        "html": "Por supuesto, la empresa también tiene compromisos. Debe proporcionar información, dedicar tiempo al proyecto, involucrar a sus responsables y tomar decisiones cuando sea necesario."
      },
      {
        "type": "paragraph",
        "html": "Pero no me parece razonable esperar que el cliente sepa conducir por sí mismo una transformación tecnológica y operativa."
      },
      {
        "type": "paragraph",
        "html": "Precisamente para eso ha contratado a un especialista."
      },
      {
        "type": "paragraph",
        "html": "El proveedor debe conocer el sistema, pero también necesita comprender la organización en la que va a utilizarse."
      },
      {
        "type": "paragraph",
        "html": "Debe anticipar dificultades, proponer alternativas, explicar las consecuencias de ciertas decisiones y acompañar a los usuarios cuando aparecen problemas."
      },
      {
        "type": "paragraph",
        "html": "Y, sobre todo, debe tener la capacidad de distinguir entre una dificultad técnica y una dificultad de adaptación."
      },
      {
        "type": "paragraph",
        "html": "No es lo mismo que una operación falle porque el sistema tiene un error, que descubrir que los usuarios siguen trabajando de una manera distinta a la acordada."
      },
      {
        "type": "paragraph",
        "html": "Ambas situaciones requieren atención, pero no se resuelven de la misma forma."
      },
      {
        "type": "paragraph",
        "html": "La primera probablemente necesite una corrección tecnológica."
      },
      {
        "type": "paragraph",
        "html": "La segunda puede requerir escuchar a las personas, revisar el procedimiento, aclarar responsabilidades o proporcionar acompañamiento adicional."
      },
      {
        "type": "key",
        "html": "Un buen implantador no solamente sabe resolver problemas de software. También debe saber ayudar a las personas a resolver problemas de trabajo."
      },
      {
        "type": "heading",
        "id": "seccion-6",
        "text": "El cambio necesita liderazgo, no imposición"
      },
      {
        "type": "paragraph",
        "html": "Cuando una empresa decide adoptar una nueva manera de trabajar, es natural que aparezcan dudas, desacuerdos e incluso cierta resistencia."
      },
      {
        "type": "paragraph",
        "html": "Algunas personas pueden sentir que perderán autonomía. Otras pueden preocuparse por cometer errores. También habrá quienes consideren que la forma anterior de trabajar era más sencilla."
      },
      {
        "type": "paragraph",
        "html": "Mi experiencia me ha enseñado que intentar resolver estas situaciones únicamente mediante instrucciones y exigencias rara vez produce los mejores resultados."
      },
      {
        "type": "paragraph",
        "html": "Por supuesto que la dirección debe respaldar el proyecto y establecer con claridad las decisiones que se han tomado."
      },
      {
        "type": "paragraph",
        "html": "Pero el respaldo de la autoridad no sustituye la necesidad de explicar, escuchar y convencer."
      },
      {
        "type": "paragraph",
        "html": "El proveedor tiene aquí una responsabilidad especialmente importante."
      },
      {
        "type": "paragraph",
        "html": "Debe ayudar a que las personas comprendan por qué se están realizando determinados cambios, qué se espera conseguir y de qué manera su participación contribuirá al resultado."
      },
      {
        "type": "paragraph",
        "html": "No se trata de organizar discursos motivacionales ni de pretender que todo cambio será recibido con entusiasmo."
      },
      {
        "type": "paragraph",
        "html": "Se trata de construir confianza a partir de explicaciones claras, decisiones congruentes y una disposición genuina para escuchar."
      },
      {
        "type": "paragraph",
        "html": "También de reconocer que, en ocasiones, las objeciones de los empleados tienen fundamento y nos están señalando algo que deberíamos corregir."
      },
      {
        "type": "key",
        "html": "El cambio no se implanta, y mucho menos se impone. Se inspira."
      },
      {
        "type": "paragraph",
        "html": "Y esa inspiración necesita algo más que palabras: necesita que las personas descubran, en su propia experiencia, que la nueva manera de trabajar tiene sentido."
      },
      {
        "type": "heading",
        "id": "seccion-7",
        "text": "Los primeros días no cuentan toda la historia"
      },
      {
        "type": "paragraph",
        "html": "La entrada en operación de un sistema suele ser un periodo de mucha actividad."
      },
      {
        "type": "paragraph",
        "html": "Aparecen dudas, se descubren situaciones que no habían sido previstas y algunas tareas pueden tomar más tiempo mientras los usuarios adquieren práctica."
      },
      {
        "type": "paragraph",
        "html": "Eso no significa necesariamente que el proyecto esté fallando."
      },
      {
        "type": "paragraph",
        "html": "Tampoco significa que debamos minimizar cualquier dificultad bajo el argumento de que todo cambio requiere adaptación."
      },
      {
        "type": "paragraph",
        "html": "Lo importante es observar lo que está sucediendo y actuar oportunamente."
      },
      {
        "type": "paragraph",
        "html": "¿Hay errores que se repiten?"
      },
      {
        "type": "paragraph",
        "html": "¿Existen procedimientos que resultan innecesariamente complicados?"
      },
      {
        "type": "paragraph",
        "html": "¿Algún área está teniendo más dificultades que las demás?"
      },
      {
        "type": "paragraph",
        "html": "¿Se están utilizando correctamente las herramientas o han comenzado a surgir nuevamente controles paralelos?"
      },
      {
        "type": "paragraph",
        "html": "Estas observaciones permiten realizar ajustes y, en ocasiones, descubrir oportunidades de mejora que no eran evidentes antes de comenzar a trabajar con el sistema."
      },
      {
        "type": "paragraph",
        "html": "Por eso considero que el acompañamiento posterior a la puesta en marcha debe formar parte de la implantación, no tratarse como una atención extraordinaria."
      },
      {
        "type": "paragraph",
        "html": "El proyecto necesita un periodo en el que podamos comprobar no solamente que el software funciona, sino que la organización está aprendiendo a trabajar mejor con él."
      },
      {
        "type": "heading",
        "id": "seccion-8",
        "text": "¿Cuándo podemos decir que una implantación fue exitosa?"
      },
      {
        "type": "paragraph",
        "html": "No creo que exista una fecha universal para responder esta pregunta."
      },
      {
        "type": "paragraph",
        "html": "Cada empresa tiene su propia complejidad, sus necesidades y su ritmo de adaptación."
      },
      {
        "type": "paragraph",
        "html": "Pero sí creo que podemos establecer algunos criterios."
      },
      {
        "type": "paragraph",
        "html": "Una implantación comienza a demostrar su valor cuando las personas pueden realizar sus actividades con confianza, los procesos se ejecutan de manera consistente y la información se vuelve más útil para tomar decisiones."
      },
      {
        "type": "paragraph",
        "html": "Cuando disminuyen los errores que antes eran frecuentes."
      },
      {
        "type": "paragraph",
        "html": "Cuando se reducen las tareas innecesarias."
      },
      {
        "type": "paragraph",
        "html": "Cuando las áreas comienzan a coordinarse mejor."
      },
      {
        "type": "paragraph",
        "html": "Y, especialmente, cuando los resultados que la empresa esperaba conseguir empiezan a hacerse visibles."
      },
      {
        "type": "paragraph",
        "html": "No todos los beneficios aparecerán al mismo tiempo. Algunos serán inmediatos; otros requerirán más trabajo y seguimiento."
      },
      {
        "type": "paragraph",
        "html": "Pero esa es precisamente la razón por la que debemos definir desde el principio qué queremos lograr y mantener la atención en esos objetivos durante todo el proyecto."
      },
      {
        "type": "paragraph",
        "html": "Hay algo que me parece importante recordar: <strong>el verdadero protagonista de una implantación exitosa no es el sistema ni quien lo desarrolla. Son las personas que consiguen que la empresa trabaje mejor gracias a él.</strong>"
      },
      {
        "type": "paragraph",
        "html": "El proveedor puede orientar, proponer, enseñar y acompañar."
      },
      {
        "type": "paragraph",
        "html": "La dirección puede respaldar, decidir y proporcionar los recursos necesarios."
      },
      {
        "type": "paragraph",
        "html": "Pero son los colaboradores quienes, día tras día, convierten las posibilidades de la tecnología en una nueva realidad para la empresa."
      },
      {
        "type": "paragraph",
        "html": "Y cuando eso sucede, el éxito deja de ser simplemente un proyecto tecnológico concluido."
      },
      {
        "type": "paragraph",
        "html": "Se convierte en una mejora real en la manera de trabajar."
      },
      {
        "type": "paragraph",
        "html": "Porque implantar un sistema no consiste solamente en conseguir que las personas aprendan a utilizar un programa."
      },
      {
        "type": "key",
        "html": "Consiste en ayudar a que una organización aprenda a trabajar mejor."
      }
    ]
  }
];
