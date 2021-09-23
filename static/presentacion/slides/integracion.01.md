## Implementación de metodologías de **integración contínua** para equipos medianos de desarrollo

`<Teo González Calzada/>`

![Diagram of continuos integration](ci/integracion.png)

Las mayores ventajas

- Reducción de _riesgo_
- Mayor _control_

Desventajas

- Requiere _conocimiento_
- Requiere de mantenimiento contínuo

Las herramientas son de uso general, pero hablaremos de ellas en un contexto específico.

Las metodologías son solo acuerdos y convenciones, si no se siguen, no funcionan.

## Git

Pieza fundamental de la integración contínua.

Lo ideal, es establecer restricciones en los repositorios remotos para no permitir prácticas que no van de acuerdo a las metodologías establecidas.

### Ramas

`dev -> testing -> production`

`dev -> validation -> master`

`dev -> main`

```
feature/*
fix/*
hotfix/*
```

## **Protección**

Si queremos forzar una convención específica. Los host de código ofrecen facilidades para ello.

![Branches protection on github](ci/branches_github.png)

![Branches protection on gitlab](ci/branches_gitlab.png)

## Commits

Es recomendado tener una convención de commits, idioma, categoría, relevancia, tareas relacionadas, todo esto es información valiosa que se puede tener en un commit.

[conventional commits .org](https://www.conventionalcommits.org/en/v1.0.0/)

## Reglas de commits

Cada plataforma ofrece su propio sistema de reglas, pero generalmente se puede agregar la revisión como un elemento más de la ejecución del pipeline.

Ej. [action para github](https://github.com/beemojs/conventional-pr-action) o [semantic release para gilab](https://faun.pub/git-flow-and-semantic-release-with-gitlab-be54b2c64818)

No se suben archivos compilados, y preferentemente tampoco librerías a los repositorios de los proyectos.

## Proveedores de **ejecución** de integración contínua

- Gitlab (CI)\*
- Github (Actions)
- Jenkins\*
- CircleCI

Mención honorífica: Netlify

_Nota: Cryptomining_

_Debido al reciente auge de criptominería, los minutos gratuitos que los los servicios de integración contínua ofrecen han bajado y los precios aumentado._

Véase [Crypto miners are killing free CI](https://webapp.io/blog/crypto-miners-are-killing-free-ci/)

## ¿Cómo funciona?

Se parte de una imagen de docker, en la cual se ejecutan una serie de scripts.

Generalmente se escriben instrucciones en **yaml** y se envían junto con el repositorio.

## ¿Porqué **Docker**?

Es una plataforma para crear contenedores de software, una sencilla forma de **estandarizar** ambientes de producción (y desarrollo)

Permite tener versiones específicas de software, como servidores de autenticación, bases de datos con una versión específica.

Ejemplo de un archivo _Docker_

```dockerfile
FROM buildpack-deps:buster

RUN curl -fsSLO --compressed "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-$ARCH.tar.xz" \
   && tar -xJf "node-v$NODE_VERSION-linux-$ARCH.tar.xz" -C /usr/local --strip-components=1 --no-same-owner \
   && ln -s /usr/local/bin/node /usr/local/bin/nodejs;
```

Note: Con el uso de herramientas como docker-compose, pueden incluso crearse ambientes completos (con múltiples bases de datos y servicios) en segundos, pero eso es tema para otra ocasión.

Ejemplo con _GitlabCI_:

```yml
#.gitlab-ci.yml
variables:
  NPM_TOKEN: ${CI_JOB_TOKEN}

stages:
  - release
default:
  image: node:latest
  before_script:
    # Parecido a npm install
    - npm ci --cache .npm --prefer-offline
    - npm run build
  cache:
    key: ${CI_COMMIT_REF_SLUG}
    paths:
      - .npm/

publish:
  stage: release
  script:
    - npm run semantic-release
  rules:
    - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH
```

Ejemplo con _Github Actions_:

```yml
#.github/workflows/nom-build.yml
name: NodeJS CI
on: [push]
jobs:
  build:
    name: Build
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [12.x, 14.x]

    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}
      - run: npm install
      - run: npm run build --if-present
```

Ejemplo con _Jenkins_

```json
pipeline {
  agent any

  tools {nodejs "node"}

  stages {
    stage('install') {
      steps {
        sh 'npm ci'
      }
    }
    stage('build') {
       steps {
         sh 'npm run build'
       }
    }
  }
}
```

## Recomendaciones

- Utilizar herramientas de _variables de ambiente_ que provee su proveedor.
- Tener un _repositorio_ de scripts centralizado [como KDE lo hace](https://invent.kde.org/sysadmin/ci-tooling)
- Utilizar _cachés_ si es posible.

Cosas necesarias para tener una metodología de integración contínua

- Crear una metodología de nombramiento de _ramas_
- Convenciones para _commits_
- Crear un _pipeline_ efectivo
- Establecer permisos

Gracias por su atención

\- Teo [@thblckjkr](https://thblckjkr.tk)

**Créditos**

A Areli por ayudarme en proofreading

y Alan Ovalle por ayudarme con el diseño y presentación.

## ¿Preguntas?
