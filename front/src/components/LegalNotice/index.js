/* eslint-disable max-len */
// == Import npm
import React from 'react';

// == Import component
import Title from 'src/components/Title';

// == Import
import './legalNotice.scss';

// == Composant
const LegalNotice = () => (
  <div className="legalNotice">
    <Title title="Mentions légales" />

    <p>Merci de lire avec attention les différentes modalités d’utilisation du présent site avant d’y parcourir ses pages. En vous connectant sur ce site, vous acceptez sans réserves les présentes modalités.</p>

    <h3>Éditeur du Site</h3>
    <p>Rando-Bière</p>

    <h3>Développement</h3>
    <p>Projet de fin de formation de l'école O'clock, promotion Quill</p>

    <h3>Hébergement</h3>
    <p>Le site Rando-Bière est hébergé par la société Amazon Web Services:</p>
    <p>Amazon Web Services LLC</p>
    <p>P.O. Box 81226</p>
    <p>Seattle, WA 98108-1226</p>

    <h3>Conditions d’utilisation</h3>
    <p>Ce site utilise différents langages web. Ainsi, pour un meilleur confort d’utilisation et un graphisme plus agréable, nous vous recommandons de recourir à des navigateurs modernes (Google Chrome,  Safari, Firefox ou encore Edge).</p>
    <p>L'équipe Rando-Bière met en œuvre tous les moyens dont elle dispose, pour assurer une information et une mise à jour fiable de son site internet. Toutefois, des erreurs ou omissions peuvent survenir. L’internaute devra donc s’assurer de l’exactitude des informations et signaler toute modification du site qu’il jugerait utile. Rando-Bière n’est en aucun cas responsable de l’utilisation faite de ces informations, et de tout préjudice direct ou indirect pouvant en découler.</p>
    <p>Les renseignements figurant sur le site ne sont pas exhaustifs et les photos sont non contractuelles. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne. Par ailleurs, toutes les informations indiquées sur le site sont données à titre indicatif, et sont susceptibles de changer ou d’évoluer sans préavis.</p>

    <h3>Limitation contractuelle sur les données</h3>
    <p>Tout contenu téléchargé se fait aux risques et périls de l’utilisateur et sous sa seule responsabilité. En conséquence, Rando-Bière ne saurait être tenu responsable d’un quelconque dommage subi par l’ordinateur de l’utilisateur ou d’une quelconque perte de données consécutives au téléchargement.</p>

    <h3>Propriété intellectuelle</h3>
    <p>Tout le contenu du présent site Rando-Bière incluant, de façon non limitative, les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme, sont la propriété exclusive de la société à l’exception des marques, logos ou contenus appartenant à d’autres sociétés partenaires ou auteurs.</p>
    <p>Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l’accord exprès par écrit. Cette représentation ou reproduction, par quelque procédé que ce soit, constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle. Le non-respect de cette interdiction constitue une contrefaçon pouvant engager la responsabilité civile et pénale du contrefacteur. En outre, les propriétaires des Contenus copiés pourraient intenter une action en justice à votre encontre.</p>

    <h3>Crédits photos</h3>
    <p>https://unsplash.com</p>
    <p>https://www.flaticon.com</p>
    <p>https://pixabay.com/fr/</p>
  </div>
);

// == Export
export default LegalNotice;
