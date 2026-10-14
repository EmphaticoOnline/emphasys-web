# Evaluación Empresarial en 4 Minutos — Especificación funcional

Fuente de referencia: documento de Notion «Evaluación Empresarial en 4 Minutos · Reactivos y resultados» (consultado el 13 de octubre de 2026).

## Estado
- Aprobado: nombre, ocho preguntas y 24 respuestas, ponderaciones, clasificación, reglas de protección, mensajes por nivel y política de captura de correo.
- Por validar: tiempo real de realización (promesa de cuatro minutos) y escenarios de prueba.
- Por diseñar: pantalla y texto de bienvenida. El texto de bienvenida que aparece abajo es **propuesto, no aprobado**.

## Bienvenida — propuesta para prototipo (NO aprobada)
**Título:** ¿Qué tan claro tienes el funcionamiento de tu empresa?

**Texto:** Responde ocho preguntas sobre el control, la rentabilidad y la operación de tu negocio. En aproximadamente cuatro minutos obtendrás una primera orientación sobre tus fortalezas y aspectos que conviene revisar. Sin registro y sin compromiso.

**Botón:** Comenzar evaluación

**Aviso:** Es una evaluación orientativa, no un diagnóstico empresarial definitivo.

## Preguntas y respuestas (APROBADAS)

Cada pregunta presenta las siguientes opciones exactamente en este orden. Los valores de riesgo son: primera opción = 0; segunda = 1; tercera = 2.

### 1. Dependencia del dueño — Peso 3
**Pregunta:** Si mañana te ausentas una semana, ¿qué pasa con tu negocio?
1. Sigue funcionando casi igual.
2. Algunas cosas se detienen.
3. La empresa se frena.

### 2. Tesorería — Peso 2
**Pregunta:** ¿Qué tan claro tienes cuánto dinero necesita tu empresa cada mes para operar?
1. Lo conozco con precisión y lo reviso regularmente.
2. Tengo una idea aproximada, pero no siempre coincide con la realidad.
3. No lo sé con certeza, voy cubriendo sobre la marcha.

### 3. Ventas y rentabilidad — Peso 5
**Pregunta:** ¿Sabes cuáles de tus productos o servicios realmente dejan más ganancias a tu empresa?
1. Sí, conozco los más rentables y tomo decisiones con eso.
2. Más o menos, sé qué productos vendo más, pero no necesariamente cuáles dejan más ganancias.
3. No lo tengo claro, realmente no sé cuáles son los que más aportan a mis ganancias.

### 4. Inventarios — Peso 4
**Pregunta:** ¿Qué tan clara es la idea que tienes del valor total de tu inventario y de cuánto de ese valor está en productos que se venden poco?
1. Tengo una estimación bastante certera del valor total de mi inventario y también identifico qué parte está en productos que se venden poco.
2. Tengo una idea general, pero no sé realmente cuánto dinero está parado en productos de baja o nula rotación.
3. No lo tengo claro; no sé cuánto dinero tengo invertido en mi inventario.

### 5. Equipo y responsabilidades — Peso 1
**Pregunta:** Cuando surge un problema en el día a día, ¿qué tan seguido termina en tus manos?
1. Casi nunca, el equipo lo resuelve.
2. A veces, me consultan ciertos temas.
3. Casi siempre, termino interviniendo yo.

### 6. Fluidez y eficiencia operativa — Peso 3
**Pregunta:** ¿Qué tan fluidamente funcionan los procesos de tu empresa, desde que inicia una actividad hasta que se completa?
1. Muy bien. Las actividades fluyen de manera ágil, coordinada y prácticamente sin interrupciones.
2. Regular. Generalmente las cosas funcionan, pero hay retrasos, tareas duplicadas o problemas de comunicación que dificultan la operación.
3. Con muchas dificultades. Los procesos frecuentemente se atoran, son lentos o requieren demasiados pasos para conseguir resultados.

### 7. Planeación de compras — Peso 4
**Pregunta:** ¿Qué tan claro tienes cuánto dinero necesita invertir tu empresa en compras y en qué productos conviene hacerlo?
1. Tengo mucha claridad. Sé cuánto necesito invertir y qué productos debo comprar, basándome en su demanda y rotación.
2. Tengo una idea aproximada. Generalmente compro según la experiencia y las necesidades que van surgiendo.
3. No tengo suficiente claridad. Frecuentemente compro sin saber con precisión cuánto invertir ni qué productos conviene priorizar.

### 8. Seguimiento comercial — Peso 5
**Pregunta:** ¿Qué tan efectivo es el seguimiento que da tu empresa a las cotizaciones y oportunidades de venta?
1. Muy efectivo. Damos seguimiento sistemático a las oportunidades y sabemos cuáles se convierten en ventas.
2. Regular. Damos seguimiento, pero algunas oportunidades se nos escapan.
3. Poco efectivo. No tenemos un seguimiento consistente y probablemente perdemos ventas por ello.

## Reglas de cálculo (APROBADAS)

- Para cada pregunta: `puntosDeRiesgo = indiceDeOpcion * peso`, donde `indiceDeOpcion` es 0, 1 o 2.
- Pesos, en orden: `[3, 2, 5, 4, 1, 3, 4, 5]`; total de pesos 27.
- `puntuacionTotal = suma(puntosDeRiesgo)`; intervalo posible: **0 a 54**.
- Nivel inicial:
  - **0–13**: Bien encaminado.
  - **14–29**: Oportunidades importantes de mejora.
  - **30–54**: Áreas que requieren atención.
- **Regla de protección:** si hay al menos una respuesta 2 en un área con peso 4 o 5, el resultado global será como mínimo «Oportunidades importantes de mejora». Si hay dos o más respuestas 2 en áreas con peso 4 o 5, el resultado global será «Áreas que requieren atención». Aplicar la categoría más alta entre el nivel por puntuación y la protección.
- **Fortalezas:** todas las áreas con respuesta 0.
- **Oportunidades de mejora:** todas las áreas con respuesta 1.
- **Áreas de atención:** todas las áreas con respuesta 2.
- Ordenar las áreas no favorables por su contribución ponderada (`respuesta * peso`) descendente; ante empates mantener todas, sin inventar un desempate por supuesta gravedad.
- Estas categorías son orientativas/editoriales; **no** son una escala científica validada ni un diagnóstico definitivo. No afirmar que las respuestas prueban causalidad ni que la empresa está «en crisis».

## Mensajes por nivel (APROBADOS)

**Bien encaminado:**
> Tus respuestas sugieren que cuentas con varias bases de organización y control. Aun así, hay aspectos que conviene revisar para sostener el crecimiento.

**Oportunidades importantes de mejora:**
> Tus respuestas muestran fortalezas, pero también áreas donde podrías estar perdiendo eficiencia, claridad o posibilidades de crecimiento. Identificarlas es el primer paso para mejorarlas.

**Áreas que requieren atención:**
> Tus respuestas señalan varios aspectos que merecen revisarse con mayor profundidad. Atenderlos puede ayudarte a recuperar control y tomar mejores decisiones.

## Cierre comercial y CTA (APROBADOS)

> Esta evaluación es una primera aproximación, no un diagnóstico definitivo. La Radiografía Empresarial permite entender las causas, las conexiones entre áreas y las prioridades reales para actuar.

**Botón:** Conocer la Radiografía Empresarial

**Destino:** `/radiografia-empresarial`

## Entrega y correo (APROBADO; envío fuera de alcance del primer prototipo)

- Presentar **resultados completos de inmediato**, sin pedir nombre, correo ni teléfono.
- Después de los resultados, ofrecer voluntariamente: **¿Quieres recibir una copia de tus resultados en tu correo?**
- Pedir dirección de correo **solo** si el visitante decide recibir esa copia.
- Consentimiento de comunicaciones comerciales **separado, independiente, opcional, sin casilla preseleccionada**.
- El envío del diagnóstico no equivale a consentimiento publicitario.
- El correo puede incluir una invitación discreta a conocer la Radiografía Empresarial.
- En la versión inicial de prototipo no activar un formulario que prometa envío real si no está implementado.

## Alcance del prototipo visual

1. Crear nueva ruta `/evaluacion-empresarial` dentro del sitio Next.js existente.
2. Tres vistas integradas: bienvenida, secuencia de ocho preguntas con indicador de avance y navegación, y resultado conforme a reglas aprobadas. Para diseño, se pueden simular respuestas, pero no inventar reglas.
3. Mantener estilo visual de Emphasys, responsive y accesible.
4. No modificar menú, home, Radiografía Empresarial, API de contacto ni despliegue.
5. No implementar todavía correo, persistencia de respuestas ni analítica sin aprobación posterior.
6. No hacer commit, push o deploy. El usuario realiza los despliegues.

## Pruebas posteriores

- Todas las respuestas 0 → 0 puntos, Bien encaminado.
- Todas las respuestas 2 → 54 puntos, Áreas que requieren atención.
- Una respuesta 2 en área de peso 5 y el resto 0 → 10 puntos, pero categoría mínima Oportunidades importantes de mejora.
- Dos respuestas 2 en áreas de peso 4/5 y el resto 0 → nivel Áreas que requieren atención por regla de protección.
- Validar combinaciones intermedias, regreso a preguntas, edición de respuestas y recálculo de resultados.
- Medir duración real con usuarios; ajustar promesa o experiencia solo después de evidencia.
