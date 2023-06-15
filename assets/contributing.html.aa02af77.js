import{r as o,o as i,c as r,a as n,b as e,F as l,e as s,d as t}from"./app.d438baca.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const u={},d=n("h1",{id:"contribute-to-thunder",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#contribute-to-thunder","aria-hidden":"true"},"#"),s(" Contribute to Thunder")],-1),h=n("p",null,'Thunder is a "Drupal" based distribution.',-1),g=n("p",null,"We are working on GitHub and drupal.org. Issues are managed on drupal.org. That gives us the possibility to better interact with related issues. Code improvements will be managed over GitHub's PR system.",-1),m=s("If you found an issue with Thunder, please open a "),b={href:"https://www.drupal.org/project/issues/thunder?categories=All",target:"_blank",rel:"noopener noreferrer"},k=s("ticket"),f=s(" on drupal.org. Please have in mind that Thunder is a collection of Drupal modules, a set of configurations, and very little custom code."),v=t(`<p>So, if you can track down an issue to a specific module, please open the ticket in the corresponding issue queue on drupal.org.</p><p>If you want to open a PR for the Thunder distribution, please make sure you created a corresponding issue on d.o. before. All created pull requests should contain a d.o. issue number in its title.</p><p>Please also note the pull request template to create better quality pull requests.</p><h2 id="setup-thunder-for-development" tabindex="-1"><a class="header-anchor" href="#setup-thunder-for-development" aria-hidden="true">#</a> Setup Thunder for development</h2><p>To install the Thunder Distribution for development create the thunder-develop project:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> create-project thunder/thunder-develop -s dev
<span class="token builtin class-name">cd</span> thunder-develop
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>This will install thunder into the docroot folder. The actual distribution repository will be cloned into docroot/profiles/contrib/thunder.</p><p>Now you can install thunder. Point the web server to the docroot directory and do a normal site install.</p><p>To work on the distribution, work inside the docroot/profiles/contrib/thunder folder.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> docroot/profiles/contrib/thunder
<span class="token function">git</span> checkout -b feature/new-thunder-feature <span class="token comment"># &lt;-- this will be a branch in the distribution not the project</span>
<span class="token operator">&lt;</span>make changes<span class="token operator">&gt;</span>
<span class="token function">git</span> commit <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="automated-code-checks" tabindex="-1"><a class="header-anchor" href="#automated-code-checks" aria-hidden="true">#</a> Automated code checks</h2>`,11),_=s("All Thunder pull requests are executed on "),w={href:"https://github.com/thunder/thunder-distribution/actions",target:"_blank",rel:"noopener noreferrer"},y=s("GitHub actions"),x=s(". On every pull request tests will be executed (or when new commits are pushed into the pull request branch). All code will be checked against coding style."),T=t(`<p>We support some test execution options. They can be provided by pull request labels. Here is a list of supported labels:</p><ul><li><em>test-upgrade</em> - this option will execute a custom test path, where an update (including the execution of update hooks) from Thunder 2 will be tested. This option should be used in case of a pull request with update hooks or module updates.</li><li><em>test-min</em> - this option installs the pull request version of Thunder with the oldest possible dependencies and executes the test suite.</li><li><em>test-performance</em> - this option pushed the codebase to our performance testing infrastructure. A successful test-max build is required for this.</li></ul><h2 id="how-to-s" tabindex="-1"><a class="header-anchor" href="#how-to-s" aria-hidden="true">#</a> How-To&#39;s</h2><h3 id="update-profile-configuration" tabindex="-1"><a class="header-anchor" href="#update-profile-configuration" aria-hidden="true">#</a> Update profile configuration</h3><p>The Thunder distribution ships the config_profile module as a dev dependency for easier config updates. The workflow for updating config files that are shipped in the distribution should be:</p><ul><li><p>Install the latest dev version of Thunder</p></li><li><p>Enable the Config Profile module</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>drush en config_profile
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>Apply all your changes in the UI</p></li><li><p>Export your configuration</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>drush cex
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>The configuration is exported to the chosen config_directory and simultaneously to your profile folder.</p></li><li><p>config_profile has now copied all the config changes to the profile folder</p></li><li><p>Put all new config files to the desired folder and add track it in git</p></li><li><p>Remove all untracked files</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clean -fd
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li></ul><h3 id="writing-update-hooks" tabindex="-1"><a class="header-anchor" href="#writing-update-hooks" aria-hidden="true">#</a> Writing update hooks</h3><p>To support the creation of update hooks, Thunder integrated the <code>update_helper</code> module. That contains several methods to e.g. update the existing configuration or enabling modules.</p><p>Outputting results of update hook is highly recommended for that we have provided UpdateLogger, it handles the output of result properly for <code>drush</code> or UI (<code>update.php</code>) update workflow. That&#39;s why every update hook that changes something should log what is changed and was it successful or it has failed. And the last line in the update hook should be returning of UpdateLogger output. UpdateLogger service is also used by Thunder Updater and it can be retrieved from it. Here are two examples of how to get and use UpdateLogger. All text logged as INFO, will be outputted as success in <code>drush</code> output.</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>  <span class="token comment">// Get service directly.</span>
  <span class="token doc-comment comment">/** <span class="token keyword">@var</span> <span class="token class-name"><span class="token punctuation">\\</span>Drupal<span class="token punctuation">\\</span>update_helper<span class="token punctuation">\\</span>UpdateLogger</span> <span class="token parameter">$updateLogger</span> */</span>
  <span class="token variable">$updateLogger</span> <span class="token operator">=</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Drupal</span><span class="token operator">::</span><span class="token function">service</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;update_helper.logger&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Log change success or failures.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$updateLogger</span><span class="token operator">-&gt;</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Change is successful.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token variable">$updateLogger</span><span class="token operator">-&gt;</span><span class="token function">warning</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Change has failed.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// At end of update hook return result of UpdateLogger::output().</span>
  <span class="token keyword">return</span> <span class="token variable">$updateLogger</span><span class="token operator">-&gt;</span><span class="token function">output</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>Other way to get UpdateLogger is from Update Helper Updater service.</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>  <span class="token comment">// Get service from Thunder Updater service.</span>
  <span class="token doc-comment comment">/** <span class="token keyword">@var</span> <span class="token class-name"><span class="token punctuation">\\</span>Drupal<span class="token punctuation">\\</span>update_helper<span class="token punctuation">\\</span>Updater</span> <span class="token parameter">$updater</span> */</span>
  <span class="token variable">$updater</span> <span class="token operator">=</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Drupal</span><span class="token operator">::</span><span class="token function">service</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;update_helper.updater&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token variable">$updateLogger</span> <span class="token operator">=</span> <span class="token variable">$updater</span><span class="token operator">-&gt;</span><span class="token function">logger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token operator">...</span>

  <span class="token comment">// At end of update hook return result of UpdateLogger::output().</span>
  <span class="token keyword">return</span> <span class="token variable">$updateLogger</span><span class="token operator">-&gt;</span><span class="token function">output</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="importing-new-configurations" tabindex="-1"><a class="header-anchor" href="#importing-new-configurations" aria-hidden="true">#</a> Importing new configurations</h4><p>You have to create configuration update definition file with global <code>import_configs</code> action. For example:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">__global</span><span class="token punctuation">:</span>
  <span class="token key atrule">import_configs</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> config.to.import
    <span class="token punctuation">-</span> config.to.import<span class="token punctuation">-</span>no2
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>After that you just have to execute configuration update. For example:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>  <span class="token doc-comment comment">/** <span class="token keyword">@var</span> <span class="token class-name"><span class="token punctuation">\\</span>Drupal<span class="token punctuation">\\</span>update_helper<span class="token punctuation">\\</span>Updater</span> <span class="token parameter">$updater</span> */</span>
  <span class="token variable">$updater</span> <span class="token operator">=</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Drupal</span><span class="token operator">::</span><span class="token function">service</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;update_helper.updater&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token variable">$updater</span><span class="token operator">-&gt;</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;thunder_article&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;thunder_update_8101&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token variable">$updater</span><span class="token operator">-&gt;</span><span class="token function">logger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">output</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>This update hook will import configurations, that are in a module or profile config directory.</p><h4 id="updating-existing-configuration-with-manually-defined-configuration-changes" tabindex="-1"><a class="header-anchor" href="#updating-existing-configuration-with-manually-defined-configuration-changes" aria-hidden="true">#</a> Updating existing configuration (with manually defined configuration changes)</h4><p>Before Drupal\\update_helper\\Updater::updateConfig() updates existing configuration, it could check the current values of that config. That helps to leave the modified, existing configuration in a valid state.</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>  <span class="token comment">// List of configurations that should be checked for existence.</span>
  <span class="token variable">$expectedConfig</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;content&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;field_url&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;type&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;instagram_embed&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;weight&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;label&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;hidden&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;settings&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
      <span class="token string single-quoted-string">&#39;width&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">241</span><span class="token punctuation">,</span>
      <span class="token string single-quoted-string">&#39;height&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">313</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;third_party_settings&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token comment">// New configuration that should be applied.</span>
  <span class="token variable">$newConfig</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;content&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;thumbnail&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;type&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;image&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;weight&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;region&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;content&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;label&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;hidden&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;settings&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
      <span class="token string single-quoted-string">&#39;image_style&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;media_thumbnail&#39;</span><span class="token punctuation">,</span>
      <span class="token string single-quoted-string">&#39;image_link&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;third_party_settings&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/** <span class="token keyword">@var</span> <span class="token class-name"><span class="token punctuation">\\</span>Drupal<span class="token punctuation">\\</span>update_helper<span class="token punctuation">\\</span>Updater</span> <span class="token parameter">$updater</span> */</span>
  <span class="token variable">$updater</span> <span class="token operator">=</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Drupal</span><span class="token operator">::</span><span class="token function">service</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;update_helper.updater&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token variable">$updater</span><span class="token operator">-&gt;</span><span class="token function">updateConfig</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;core.entity_view_display.media.instagram.thumbnail&#39;</span><span class="token punctuation">,</span> <span class="token variable">$newConfig</span><span class="token punctuation">,</span> <span class="token variable">$expectedConfig</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h4 id="updating-existing-configuration-with-using-of-generated-configuration-changes" tabindex="-1"><a class="header-anchor" href="#updating-existing-configuration-with-using-of-generated-configuration-changes" aria-hidden="true">#</a> Updating existing configuration (with using of generated configuration changes)</h4><p>With the Thunder Updater module, we have provided Drupal Console command that will generate update configuration changes (it&#39;s called configuration update definition or CUD). Configuration update definition (CUD) will be stored in <code>config/update</code> directory of the module and it can be easily executed with Thunder Updater.</p><p>Workflow to generate Thunder configuration update is following:</p><ol><li>Make a clean install of the previous version of Thunder (version for which one you want to create configuration update). For example, if you are merging changes to <code>develop</code> branch, then you should install Thunder for that branch</li><li>When Thunder is installed, make code update (with code update also configuration files will be updated, but not active configuration in the database)</li><li>Execute update hooks if it&#39;s necessary (e.g. in a case when you have a module and/or core updates in your branch)</li><li>Now is a moment to generate Thunder configuration update code. For that, we have provided the following drush command: <code>drush generate configuration-update</code>. That command should be executed and there is some information that has to be filled, like module name where all generated data will be saved (CUD file, checklist <code>update.yml</code> and update hook function). Then also information for checklist entry, like title, success message, and failure message. Command will generate CUD file and save it in <code>config/update</code> folder of the module, it will add an entry in <code>update.yml</code> file for the checklist and it will create an update hook function in <code>&lt;module_name&gt;.install</code> file.</li><li>After the command has finished it will display what files are modified and generated. It&#39;s always good to make an additional check of generated code.</li></ol><h3 id="write-automated-tests" tabindex="-1"><a class="header-anchor" href="#write-automated-tests" aria-hidden="true">#</a> Write automated tests</h3><p>Thunder distribution comes with a set of Drupal tests. They can be used to validate Thunder installation or to use provided traits for your own project Drupal tests.</p><h3 id="how-to-run-the-tests" tabindex="-1"><a class="header-anchor" href="#how-to-run-the-tests" aria-hidden="true">#</a> How to run the tests</h3>`,28),q=s("Please see the official "),U={href:"https://www.drupal.org/docs/automated-testing/phpunit-in-drupal",target:"_blank",rel:"noopener noreferrer"},D=s("Drupal documentation"),A=t(`<p>To speed up the test execution time, you can provide a database dump to Thunder tests:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> docroot
php ./core/scripts/db-tools.php dump-database-d8-mysql <span class="token operator">|</span> <span class="token function">gzip</span> <span class="token operator">&gt;</span> thunder.sql.gz
<span class="token builtin class-name">export</span> <span class="token assign-left variable">thunderDumpFile</span><span class="token operator">=</span>/path/to/thunder.sql.gz
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,2),E={id:"how-to-run-the-nightwatchjs-performance-tests",tabindex:"-1"},R=n("a",{class:"header-anchor",href:"#how-to-run-the-nightwatchjs-performance-tests","aria-hidden":"true"},"#",-1),L=s(" How to run the NightwatchJS performance tests "),C=s("You need to install "),H={href:"https://yarnpkg.com",target:"_blank",rel:"noopener noreferrer"},N=s("Yarn"),P=s(". Please check the installation documentation for it."),$=n("li",null,[s("You have to install "),n("code",null,"thunder/thunder_performance_measurement"),s(" package. To do that, execute the following command in your project root directory: "),n("code",null,"composer require thunder/thunder_performance_measurement:dev-master --dev"),s(" and enable the module by executing: "),n("code",null,"drush en thunder_performance_measurement"),s(" in your "),n("code",null,"docroot"),s(" directory.")],-1),S=s("You need to install "),I={href:"https://www.npmjs.com/package/elastic-apm-node",target:"_blank",rel:"noopener noreferrer"},j=s("Elastic APM Node.js Agent"),B=s(" in Drupal Core node packages. To do that go to your "),Y=n("code",null,"docroot/core",-1),F=s(" directory and execute the following command: "),M=n("code",null,"yarn add elastic-apm-node --dev",-1),O=t("<li>You have to adjust your <code>.env</code> file inside <code>docroot/core</code> directory. You can copy the <code>.env.example</code> to <code>.env</code> and edit it accordingly. Thunder tests require the following environment variables: <code>DRUPAL_TEST_BASE_URL</code> , <code>THUNDER_BRANCH</code>, <code>THUNDER_SITE_HOSTNAME</code> and <code>THUNDER_APM_URL</code>. The <code>THUNDER_BRANCH</code> is the branch name where tests are executing, for example, <code>8.x-4.x</code>. The <code>THUNDER_SITE_HOSTNAME</code> is the hostname where tests are executing, for example, <code>thunder.dev</code>. The <code>THUNDER_APM_URL</code> is URL to Elastic APM Server, for example, <code>http://localhost:8200</code>.</li><li>After that, you can run NightwatchJS tests by executing the following command inside <code>docroot/core</code> directory: <code>yarn test:nightwatch &lt;path to JS Test file&gt;</code>. Here is an example: <code>yarn test:nightwatch ../profiles/contrib/thunder/tests/src/Nightwatch/Tests/CreateMostUsedContent.js</code></li>",2),W=t(`<h4 id="if-you-have-a-problem-with-outdated-chromedriver" tabindex="-1"><a class="header-anchor" href="#if-you-have-a-problem-with-outdated-chromedriver" aria-hidden="true">#</a> If you have a problem with outdated chromedriver</h4><p>Drupal core does not update javascript dependencies so fast and chromedriver may be outdated and unable to work with chrome installed on the system. You can provide chrome that can be used by chromedriver inside a docker container. You can do it with the following command:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run --name selenium_chrome -d -P -p <span class="token number">6000</span>:5900 -p <span class="token number">4444</span>:4444 --shm-size 256m --add-host<span class="token operator">=</span><span class="token string">&quot;thunder.dd:172.16.123.1&quot;</span> selenium/standalone-chrome-debug:3.141.59-selenium
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,3),V=s("You have to find what is correct docker image tag for the chrome version you need. To do that you have to take a look at "),G={href:"https://github.com/SeleniumHQ/docker-selenium/releases",target:"_blank",rel:"noopener noreferrer"},z=s("selenium docker releases"),J=s(". This workflow is similar to PHP JavaScript tests and for additional information, you can take a look at "),Q=n("strong",null,"How to run the tests",-1),X=s(" section."),K=t(`<p>After you have running chrome in docker, you have also to change environment variables in <code>.env</code> file. The following environment variable should be set:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">DRUPAL_TEST_WEBDRIVER_PORT</span><span class="token operator">=</span><span class="token number">4444</span>
<span class="token assign-left variable">DRUPAL_TEST_WEBDRIVER_PATH_PREFIX</span><span class="token operator">=</span>/wd/hub
<span class="token assign-left variable">DRUPAL_TEST_CHROMEDRIVER_AUTOSTART</span><span class="token operator">=</span>false
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>You can copy/paste this section to the bottom of your <code>.env</code> file.</p><h2 id="documentation" tabindex="-1"><a class="header-anchor" href="#documentation" aria-hidden="true">#</a> Documentation</h2><p>To help with the documentation, please run:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone git@github.com:thunder/thunder-distribution.git
<span class="token builtin class-name">cd</span> thunder-distribution
nvm use
<span class="token function">npm</span> <span class="token function">install</span>
<span class="token function">npm</span> run docs:dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,6),Z=s("This will serve the docs server at "),nn={href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"},sn=s("http://localhost:8080"),en=s(".");function an(tn,on){const a=o("ExternalLinkIcon"),p=o("Badge");return i(),r(l,null,[d,h,g,n("p",null,[m,n("a",b,[k,e(a)]),f]),v,n("p",null,[_,n("a",w,[y,e(a)]),x]),T,n("p",null,[q,n("a",U,[D,e(a)])]),A,n("h3",E,[R,L,e(p,{type:"danger",text:"Not reviewed",vertical:"bottom"})]),n("ol",null,[n("li",null,[C,n("a",H,[N,e(a)]),P]),$,n("li",null,[S,n("a",I,[j,e(a)]),B,Y,F,M]),O]),W,n("p",null,[V,n("a",G,[z,e(a)]),J,Q,X]),K,n("p",null,[Z,n("a",nn,[sn,e(a)]),en])],64)}var ln=c(u,[["render",an]]);export{ln as default};
