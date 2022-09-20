## **DevOps** para ingenieros

`<Teo González Calzada/>`

**DevOps** no es un set de herramientas,</br>
es un ~~estilo de vida~~ **conjunto de prácticas**

<div style="background-color: #82B1FF; border-radius: 10px;">
![CI/CD](https://about.gitlab.com/images/gitlab-flow/gitlab-flow.svg)
</div>

![DevOps life cycle](https://repository.prace-ri.eu/git/help/ci/introduction/img/gitlab_workflow_example_extended_v12_3.png)

Las mayores ventajas

- Reducción de _riesgo_
- Mayor _control_
  - Métricas sobre tiempos de respuesta
  - Control sobre el código exacto que se encuentra en los servidores.

Desventajas

- Requiere _conocimiento_ especializado
- Requiere de mantenimiento contínuo

## **Herramientas** necesarias

- Control de versiones (_VCS_)
  - Git
  - SVN

* Plataforma para _CI/CD_:
  - Gitlab CI
  - Jenkins
  - Github Actions
  - CircleCI
  - Netlify, Azure DevOps, etc ...

- Plataforma para la _ejecución_ de procesos
  - Docker
  - Máquinas virtuales

_Nota: Cryptomining_

_Debido al reciente auge de criptominería, los minutos gratuitos que los los servicios de integración contínua ofrecen han bajado y los precios aumentado._

## Recomendaciones

- Utilizar herramientas de _variables de ambiente_ que provee su proveedor.
- Tener un _repositorio_ de scripts centralizado [como KDE lo hace](https://invent.kde.org/sysadmin/ci-tooling)
- Utilizar _cachés_ si es posible.
- Centrarse en la _resolución de problemas_

## **Protección**

Si queremos forzar una convención específica. Los host de código ofrecen facilidades para ello.

![Branches protection on github](ci/branches_github.png)

![Branches protection on gitlab](ci/branches_gitlab.png)
