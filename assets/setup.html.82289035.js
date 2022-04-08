import{r as t,o as r,c as i,a as n,b as a,F as d,d as s,e}from"./app.e4b5da82.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const c={},h=s('<h1 id="setup-thunder" tabindex="-1"><a class="header-anchor" href="#setup-thunder" aria-hidden="true">#</a> Setup Thunder</h1><h2 id="install-thunder" tabindex="-1"><a class="header-anchor" href="#install-thunder" aria-hidden="true">#</a> Install Thunder</h2><h3 id="system-requirements" tabindex="-1"><a class="header-anchor" href="#system-requirements" aria-hidden="true">#</a> System requirements</h3><p>You have to install <code>PHP</code>, <code>composer</code>, and <code>git</code> on your computer before you can install Thunder. The <code>composer</code> requires <code>git</code> command for proper functioning.</p>',4),u=e("To install "),p=n("code",null,"PHP",-1),m=e(" please take a look at the official "),b={href:"https://www.php.net/manual/install.php",target:"_blank",rel:"noopener noreferrer"},_=e("Installation and Configuration"),g=e(" for "),f=n("code",null,"PHP",-1),y=e(". On top of "),v=n("code",null,"PHP",-1),x=e(", you need to install the required libraries. The Thunder installation requires at least all the libraries Drupal requires. Extensions used by Drupal core are defined in Core's composer.json file - see for example the "),k={href:"https://git.drupalcode.org/project/drupal/blob/9.1.x/core/composer.json",target:"_blank",rel:"noopener noreferrer"},w=e("file for Drupal 9.1.x"),T=e('. Look at the "require" section and the keys starting with "ext-".'),q=e("The installation of "),j=n("code",null,"PHP",-1),I=e(" extensions can differ between operating systems, that's why you should check for detailed instructions on "),U=n("code",null,"PHP",-1),Y=e(),A={href:"https://www.php.net/manual/install.php",target:"_blank",rel:"noopener noreferrer"},P=e("Installation and Configuration"),H=e("."),D=e("To install "),E=n("code",null,"composer",-1),F=e(", you can check the "),B=n("code",null,"composer",-1),C=e(),N={href:"https://getcomposer.org/download",target:"_blank",rel:"noopener noreferrer"},S=e("installation instructions"),V=e(" and for "),G=n("code",null,"git",-1),L=e(" you can find installation instructions "),O={href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"},z=e("here"),M=e("."),Q=s(`<h3 id="project-setup" tabindex="-1"><a class="header-anchor" href="#project-setup" aria-hidden="true">#</a> Project setup</h3><p>To set up a new project, run this in your console to install Thunder from the command line:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> create-project thunder/thunder-project thunder --no-interaction --no-install
<span class="token builtin class-name">cd</span> thunder
<span class="token function">composer</span> <span class="token function">install</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="quick-start" tabindex="-1"><a class="header-anchor" href="#quick-start" aria-hidden="true">#</a> Quick start</h3><p>To have a quick start run the following commands:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> docroot
php core/scripts/drupal quick-start thunder
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>NOTE:</strong> This command is only useful to try Thunder locally, but not to run it in production nor to start a new project based on Thunder.</p><h3 id="beyond-quick-install" tabindex="-1"><a class="header-anchor" href="#beyond-quick-install" aria-hidden="true">#</a> Beyond quick install</h3><p>To develop your own website based on Thunder, you should have <code>mysql</code> installed on your computer.</p><p>Then you can install Thunder with:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>drush si thunder
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>As a next step, it&#39;s recommended to export your config files to a location outside the docroot. To do this change the location of <code>config_sync_directory</code> in <code>docroot/sites/default/settings.php</code>.</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$settings</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;config_sync_directory&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;../config/sync&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>and export the config files:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>drush cex
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Now you should initialize a git repository for your project and commit all the files:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> init <span class="token builtin class-name">.</span> -b development
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit -m<span class="token string">&quot;Initial commit&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>From that point, you are ready to develop your new website based on Thunder.</p>`,18),R=e("For any further information on how to run and maintain your installation please refer to "),W={href:"https://www.drupal.org/docs/user_guide/en/index.html",target:"_blank",rel:"noopener noreferrer"},$=e("the Drupal User Guide"),J=e("."),K=s(`<h2 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> Update</h2><p>Updating Thunder consists of three parts. First needs the code to be updated, and after that, it&#39;s required to update the database and then export the changes.</p><h3 id="code-update" tabindex="-1"><a class="header-anchor" href="#code-update" aria-hidden="true">#</a> Code update</h3><p>To update Thunder or any module to the newest version, constrained by the specified version in <code>composer.json</code>, use composer. The following command will check every dependency for a new version, downloads it, and updates it accordingly.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> update
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="database-update" tabindex="-1"><a class="header-anchor" href="#database-update" aria-hidden="true">#</a> Database update</h3><h4 id="update-over-ui" tabindex="-1"><a class="header-anchor" href="#update-over-ui" aria-hidden="true">#</a> Update over UI</h4><p>After you have updated your code with <code>composer</code> command, you can go to your site page <code>/update.php</code> and follow instructions to update your site database.</p><h4 id="update-with-the-command-line" tabindex="-1"><a class="header-anchor" href="#update-with-the-command-line" aria-hidden="true">#</a> Update with the command line</h4>`,9),X=e("To update the database in the command line, you need to have "),Z={href:"http://docs.drush.org/en/master/install",target:"_blank",rel:"noopener noreferrer"},ee=e("drush"),ne=e(" installed."),oe=s(`<p>You can run <code>drush</code> command in the <code>docroot</code> folder of your site to update the database of your site like this:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>drush updb
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="configuration-export" tabindex="-1"><a class="header-anchor" href="#configuration-export" aria-hidden="true">#</a> Configuration export</h3><p>After the database was updated, it&#39;s necessary to export the changes to your configuration files.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>drush cex
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="extend" tabindex="-1"><a class="header-anchor" href="#extend" aria-hidden="true">#</a> Extend</h2><h3 id="find-extensions" tabindex="-1"><a class="header-anchor" href="#find-extensions" aria-hidden="true">#</a> Find extensions</h3>`,7),ae=e("You can find extensions on "),se={href:"https://www.drupal.org",target:"_blank",rel:"noopener noreferrer"},te=e("Drupal.org"),re=e(". On "),ie={href:"https://www.drupal.org/project/project_module?f%5B3%5D=drupal_core%3A7234",target:"_blank",rel:"noopener noreferrer"},de=e("the following page"),le=e(", you can search for "),ce=n("code",null,"Modules",-1),he=e(" and on "),ue={href:"https://www.drupal.org/project/project_theme?f%5B2%5D=drupal_core%3A7234",target:"_blank",rel:"noopener noreferrer"},pe=e("this page"),me=e(" for "),be=n("code",null,"Themes",-1),_e=e(". You can find further information on extensions in "),ge={href:"https://www.drupal.org/docs/user_guide/en/extend-chapter.html",target:"_blank",rel:"noopener noreferrer"},fe=e("the Drupal User Guide - Extending and Customizing Your Site"),ye=e(" ."),ve=s(`<p>If you know the name of the extension you are looking for, the fastest way is to search it using Google or any other search engine, adding <code>drupal</code> to the search. For example: <code>drupal webform</code></p><h3 id="add-extension" tabindex="-1"><a class="header-anchor" href="#add-extension" aria-hidden="true">#</a> Add extension</h3><p>Using &#39;composer&#39;, you can also manage the dependencies of your Thunder site and extensions.</p><p>To add an extension to your project, go to the root of your site (there should be a <code>composer.json</code> file) and add modules by typing</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> require drupal/<span class="token punctuation">[</span>short name of the extension<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>into the command line.</p><p>For example:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> require drupal/webform
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="install-extension" tabindex="-1"><a class="header-anchor" href="#install-extension" aria-hidden="true">#</a> Install extension</h3><p>You can install extensions via the UI or the command line.</p><h4 id="install-over-ui" tabindex="-1"><a class="header-anchor" href="#install-over-ui" aria-hidden="true">#</a> Install over UI</h4><p>You can install modules by going to your site page <code>admin/modules</code>, or by clicking on <code>Extend</code> in the menu at the top. Here you can search for the module already added to your project by entering the name in the filter box at the top. To install a module, select the checkbox next to it, scroll to the bottom, and click <code>Install</code>. You might be warned that another module needs to be enabled because it is required for the module of your interest. By clicking on <code>continue</code>, Thunder will take care of that.</p><p>You can install themes by going to your site page <code>admin/appearance</code>, or by clicking on <code>Appearance</code> in the menu at the top. Here you can scroll to the theme you would like to install and click on <code>Install and set as default</code> to directly use the theme for your site.</p><h4 id="install-with-the-command-line" tabindex="-1"><a class="header-anchor" href="#install-with-the-command-line" aria-hidden="true">#</a> Install with the command line</h4>`,14),xe=e("To install a theme or module at the command line, you need to have "),ke={href:"http://docs.drush.org/en/master/install",target:"_blank",rel:"noopener noreferrer"},we=e("drush"),Te=e(" installed."),qe=s(`<p>You can run <code>drush</code> command in the <code>docroot</code> folder of your site to install a module like this:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>drush en <span class="token punctuation">[</span>module<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>And to install a theme, you can run <code>drush</code> command like this:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>drush en <span class="token punctuation">[</span>theme<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>To use a theme, you still have to navigate to <code>Appearance</code> (admin/appearance) and set it as default.</p><h3 id="uninstall-extension" tabindex="-1"><a class="header-anchor" href="#uninstall-extension" aria-hidden="true">#</a> Uninstall extension</h3><p>To uninstall an extension, you have to uninstall it first and then remove the code. You can uninstall extensions via the UI or the command line, but to remove the code from your project, you have to use <code>composer</code>.</p><h4 id="uninstall-in-ui" tabindex="-1"><a class="header-anchor" href="#uninstall-in-ui" aria-hidden="true">#</a> Uninstall in UI</h4><p>You can uninstall modules by going to your site page <code>admin/modules</code>, or by clicking on <code>Extend</code> in the menu at the top and then by clicking on <code>Uninstall</code> tab. Here you can search for the module by entering the name in the filter box at the top. To uninstall a module, select the checkbox next to it, scroll to the bottom, and click <code>Uninstall</code>. You might be warned that another module needs to be uninstalled because it depends on the module that you want to remove. By clicking on <code>continue</code>, Thunder will take care of that.</p><p>You can uninstall themes by going to your site page <code>admin/appearance</code>, or by clicking on <code>Appearance</code> in the menu at the top. Here you can scroll to the theme you would like to uninstall. If your site is using that theme as default, you have to select another default theme before you can uninstall it. When your site is not using that theme as default, you can click <code>Uninstall</code> next to it to uninstall it.</p><h4 id="uninstall-with-command-line" tabindex="-1"><a class="header-anchor" href="#uninstall-with-command-line" aria-hidden="true">#</a> Uninstall with command line</h4>`,11),je=e("To uninstall a theme or module at the command line, you need to have "),Ie={href:"http://docs.drush.org/en/master/install",target:"_blank",rel:"noopener noreferrer"},Ue=e("drush"),Ye=e(" installed."),Ae=s(`<p>After that, you can run <code>drush</code> command in the <code>docroot</code> folder of your site to uninstall a module like this:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>drush pm:uninstall <span class="token punctuation">[</span>module<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>To uninstall a theme, you still have to select another theme as default. It&#39;s explained in <code>Uninstall in UI</code> part.</p><p>And then you to uninstall a theme, you can run <code>drush</code> command like this:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>drush theme:uninstall <span class="token punctuation">[</span>theme<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="remove-extension" tabindex="-1"><a class="header-anchor" href="#remove-extension" aria-hidden="true">#</a> Remove extension</h3><p>After you have uninstalled an extension from your site, you can also remove the code from your project.</p><p>If you want to remove a module, that was provided by Thunder, you will have to add it to your composer.json file in the replace block. Modules, that you added yourself by the above commands, do not have to be placed there.</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;replace&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;drupal/google_analytics&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,9),Pe=e("For more information on using the composer replace check the official "),He={href:"https://getcomposer.org/doc/04-schema.md#replace",target:"_blank",rel:"noopener noreferrer"},De=e("composer documentation"),Ee=s(`<p>To remove code you can execute a command like this:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> remove drupal/<span class="token punctuation">[</span>short name of the extension<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,2);function Fe(Be,Ce){const o=t("ExternalLinkIcon");return r(),i(d,null,[h,n("p",null,[u,p,m,n("a",b,[_,a(o)]),g,f,y,v,x,n("a",k,[w,a(o)]),T]),n("p",null,[q,j,I,U,Y,n("a",A,[P,a(o)]),H]),n("p",null,[D,E,F,B,C,n("a",N,[S,a(o)]),V,G,L,n("a",O,[z,a(o)]),M]),Q,n("p",null,[R,n("a",W,[$,a(o)]),J]),K,n("p",null,[X,n("a",Z,[ee,a(o)]),ne]),oe,n("p",null,[ae,n("a",se,[te,a(o)]),re,n("a",ie,[de,a(o)]),le,ce,he,n("a",ue,[pe,a(o)]),me,be,_e,n("a",ge,[fe,a(o)]),ye]),ve,n("p",null,[xe,n("a",ke,[we,a(o)]),Te]),qe,n("p",null,[je,n("a",Ie,[Ue,a(o)]),Ye]),Ae,n("p",null,[Pe,n("a",He,[De,a(o)])]),Ee],64)}var Ve=l(c,[["render",Fe]]);export{Ve as default};
