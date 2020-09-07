---
catagory: Papers
---

# Meta Learning / Few-Shot Learning

Literatures of Meta Learning (元学习) / Few-Shot Learning (小样本学习).

## Other Awesome Lists

- [sudharsan13296/Awesome-Meta-Learning](https://github.com/sudharsan13296/Awesome-Meta-Learning)

## Courses & Tutorials

- **Meta Learning.** *Hung-yi Lee (李宏毅).* [Slides: [Part 1](https://speech.ee.ntu.edu.tw/~tlkagk/courses/ML_2019/Lecture/Meta1%20(v6).pdf), [Part 2](https://speech.ee.ntu.edu.tw/~tlkagk/courses/ML_2019/Lecture/Meta2%20(v4).pdf)] [[Video]](https://www.youtube.com/watch?v=EkAqYbpCYAc&list=PLJV_el3uVTsOK_ZK5L0Iv_EQoL1JefRL4&index=33&t=0s)

- [ICML 2019 Tutorial - Meta-Learning: from Few-Shot Learning to Rapid Reinforcement Learning](https://sites.google.com/view/icml19metalearning)

- [CVPR 2020 Tutorial - Towards Annotation-Efficient Learning: Few-Shot, Self-Supervised, and Incremental Learning Approaches](https://annotation-efficient-learning.github.io/)

- **Stanford CS330: Deep Multi-Task and Meta Learning.** *[Chelsea Finn](https://ai.stanford.edu/~cbfinn/).* [Video: [BiliBili](https://www.bilibili.com/video/BV1He411s7K4), [YouTube](https://www.youtube.com/playlist?list=PLoROMvodv4rMC6zfYmnD7UG3LVvwaITY5)] [[Homepage]](https://cs330.stanford.edu/)

- [Generalizing from Few Examples with Meta-Learning.](https://www.dropbox.com/s/sm68skkkbxbob0i/metalearning.pdf?dl=0) *Hugo Larochelle.*

## Surveys

- **Meta-Learning: A Survey.** *Joaquin Vanschoren.* arXiv 2018. [[Paper]](https://arxiv.org/pdf/1810.03548.pdf)


## Blogs & Communities

- [Metalearning Symposium, NIPS 2017](http://metalearning-symposium.ml/)

- [**Learning to Learn.**](https://bair.berkeley.edu/blog/2017/07/18/learning-to-learn/) *Chelsea Finn.* BAIR blog, 2017.

- **Learning to Learn Fast.** *Lilian Weng.* 2018. [[English]](https://lilianweng.github.io/lil-log/2018/11/30/meta-learning.html) [[Chinese]](https://wei-tianhao.github.io/blog/2019/09/17/meta-learning.html)

- [**Meta Reinforcement Learning.**](https://lilianweng.github.io/lil-log/2019/06/23/meta-reinforcement-learning.html) *Lilian Weng.* 2019.


## Theses

- **Learning to Learn with Gradient.** *[Chelsea Finn](https://ai.stanford.edu/~cbfinn/).* UC Berkeley, 2018. [[Thesis]](http://ai.stanford.edu/~cbfinn/_files/dissertation.pdf)


## Talks

- [Properties of Good Meta-Learning Algorithms (And How to Achieve Them).](https://ai.stanford.edu/~cbfinn/_files/icml2018_automl_35min.pdf) *[Chelsea Finn](https://ai.stanford.edu/~cbfinn/).* ICML 2018 AutoML Workshop.

- [Bayesian Model-Agnostic Meta-Learning](https://www.slideshare.net/YoonhoLee4/on-firstorder-metalearning-algorithms)


## Approaches

### Gradient-based

- **Learning to Learn by Gradient Descent by Gradient Descent.** *Marcin Andrychowicz, et al.* NIPS 2016. [[Paper]](https://arxiv.org/pdf/1606.04474v1.pdf) [[Code]](https://github.com/deepmind/learning-to-learn)

- **Model-Agnostic Meta-Learning for Fast Adaptation of Deep Networks.** *Chelsea Finn, et al.* ICML 2017. [[Paper]](https://arxiv.org/pdf/1703.03400.pdf) [[Code]](https://github.com/cbfinn/maml)

- **On First-Order Meta-Learning Algorithms.** *Alex Nichol, et al.* arXiv 2018. [[Paper]](https://arxiv.org/pdf/1803.02999.pdf)[[Code]](https://github.com/openai/supervised-reptile)

- **Meta-Learning with Implicit Gradients.** *Aravind Rajeswaran, et al.* NIPS 2019. [[Paper]](https://arxiv.org/pdf/1909.04630.pdf)


### Sechond-order Derivative

- **Meta-Learning with Implicit Gradients.** *Aravind Rajeswaran, et al.* NIPS 2019. [[Paper]](https://arxiv.org/pdf/1909.04630.pdf) [[Re-implementation]](https://paperswithcode.com/paper/meta-learning-with-implicit-gradients)

- **Efficient Meta Learning via Minibatch Proximal Update.** *Pan Zhou, et al.* NIPS 2019. [[Paper]](https://panzhous.github.io/assets/pdf/2019-NIPS-metaleanring.pdf) [[Appendix]](https://panzhous.github.io/assets/pdf/2019-NIPS-metaleanring-supplementary.pdf) [[Slide]](https://panzhous.github.io/assets/pdf/2019neurips-slides.pdf) [[Poster]](https://panzhous.github.io/assets/pdf/2019-NIPS-poster.pdf) [[Code]](https://panzhous.github.io/assets/code/MetaMinibatchProx.zip)

- **Meta-Curvature.** *Eunbyung Park and Junier B. Oliva.* NIPS 2019. [[Paper]](https://arxiv.org/pdf/1902.03356.pdf) [[Code]](https://github.com/silverbottlep/meta_curvature)


### Online

- **Online Learning of a Memory for Learning Rates.** *Franziska Meier, et al.* ICRA 2018. [[Paper]](https://arxiv.org/pdf/1709.06709.pdf) [[Code]](https://github.com/fmeier/online-meta-learning)

- **Online Meta-Learning.** *Chelsea Finn, et al.* ICML 2019. [[Paper]](https://arxiv.org/pdf/1902.08438.pdf)


### Bayesian

- **Recasting Gradient-Based Meta-Learning as Hierarchical Bayes.** *Erin Grant, et al.* ICLR 2018. [[Paper]](https://arxiv.org/pdf/1801.08930.pdf)

- **Bayesian Model-Agnostic Meta-Learning.** *Taesup Kim, et al.* NIPS 2018. [[Paper]](https://arxiv.org/pdf/1806.03836.pdf) [[Code]](https://github.com/jsikyoon/bmaml) [[Slide]](https://www.slideshare.net/sangwoomo7/bayesian-modelagnostic-metalearning)

- **Probabilistic Model-Agnostic Meta-Learning.** *Chelsea Finn, et al.* arXiv 2018. [[Paper]](https://arxiv.org/pdf/1806.02817.pdf)

- **Uncertainty in Model-Agnostic Meta-Learning using Variational Inference.** *Cuong Nguyen, et al.* WACV 2020. [[Paper]](https://arxiv.org/pdf/1907.11864.pdf) [[Code]](https://github.com/cnguyen10/few_shot_meta_learning)

- **Bayesian Online Meta-Learning with Laplace Approximation.** *Pau Ching Yap, et al.* arXiv 2020. [[Paper]](https://arxiv.org/pdf/2005.00146.pdf)