# Quartz v4

## Carcosa content

This site keeps its Obsidian notebook in a Git submodule at `content/`.
Clone the site with submodules so Quartz has the notes available:

```bash
git clone --recurse-submodules git@github.com:jack33001/legend-of-carcosa.git
```

If you already cloned the site without submodules, initialize the notebook with:

```bash
git submodule update --init --recursive
```

Notebook-only edits should happen in the notebook repo:
`git@github.com:jack33001/carcosa-notes.git`.

To publish newer notebook changes from the site repo, update the submodule and
commit the changed `content` pointer:

```bash
cd content
git pull
cd ..
git add content
git commit -m "chore: update notebook content"
```

> “[One] who works with the door open gets all kinds of interruptions, but [they] also occasionally gets clues as to what the world is and what might be important.” — Richard Hamming

Quartz is a set of tools that helps you publish your [digital garden](https://jzhao.xyz/posts/networked-thought) and notes as a website for free.
Quartz v4 features a from-the-ground rewrite focusing on end-user extensibility and ease-of-use.

🔗 Read the documentation and get started: https://quartz.jzhao.xyz/

[Join the Discord Community](https://discord.gg/cRFFHYye7t)

## Sponsors

<p align="center">
  <a href="https://github.com/sponsors/jackyzha0">
    <img src="https://cdn.jsdelivr.net/gh/jackyzha0/jackyzha0/sponsorkit/sponsors.svg" />
  </a>
</p>
