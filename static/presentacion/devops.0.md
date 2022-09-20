## **DevOps** para ingenieros

`<Teo González Calzada/>`



**DevOps** no es un set de herramientas,</br>
es un ~~estilo de vida~~ **conjunto de prácticas**


<div style="background-color: #82B1FF; border-radius: 10px;">
![CI/CD](https://about.gitlab.com/images/gitlab-flow/gitlab-flow.svg)
</div>


![DevOps life cycle](https://repository.prace-ri.eu/git/help/ci/introduction/img/gitlab_workflow_example_extended_v12_3.png)


Las mayores ventajas

- Reducción de *riesgo*
- Mayor *control*
  - Métricas sobre tiempos de respuesta
  - Control sobre el código exacto que se encuentra en los servidores.


Desventajas
 
- Requiere *conocimiento* especializado
- Requiere de mantenimiento contínuo


## **Herramientas** necesarias


- Control de versiones (*VCS*)
  - Git
  - SVN


- Plataforma para *CI/CD*:
  - Gitlab CI
  - Jenkins
  - Github Actions
  - CircleCI
  - Netlify, Azure DevOps, etc ...


- Plataforma para la *ejecución* de procesos
  - Docker
  - Máquinas virtuales


*Nota: Cryptomining*

*Debido al reciente auge de criptominería, los minutos gratuitos que los los servicios de integración contínua ofrecen han bajado y los precios aumentado.*



## Recomendaciones

- Utilizar herramientas de *variables de ambiente* que provee su proveedor.
- Tener un *repositorio* de scripts centralizado [como KDE lo hace](https://invent.kde.org/sysadmin/ci-tooling)
- Utilizar *cachés* si es posible.
- Centrarse en la *resolución de problemas*


## **Protección**

Si queremos forzar una convención específica. Los host de código ofrecen facilidades para ello.


![Branches protection on github](ci/branches_github.png)


![Branches protection on gitlab](ci/branches_gitlab.png)

