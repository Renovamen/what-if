# Continual Learning

Literatures of Continual Learning (持续学习, also called Lifelong / Incremental / Cumulative Learning).


## Other Awesome Lists

- [ContinualAI Wiki](https://wiki.continualai.org/index.html)
- [optimass/continual_learning_papers](https://github.com/optimass/continual_learning_papers)
- [xialeiliu/Awesome-Incremental-Learning](https://github.com/xialeiliu/Awesome-Incremental-Learning)
- [prprbr/awesome-lifelong-continual-learning](https://github.com/prprbr/awesome-lifelong-continual-learning)
- [floodsung/Lifelong-Learning-Paper-List](https://github.com/floodsung/Lifelong-Learning-Paper-List)


## Courses & Tutorials

- **Life Long Learning.** Hung-yi Lee (李宏毅). [[Slide]](https://speech.ee.ntu.edu.tw/~tlkagk/courses/ML_2019/Lecture/Lifelong%20Learning%20(v9).pdf) [[Video]](https://www.youtube.com/watch?v=7qT5P9KJnWo&list=PLJV_el3uVTsOK_ZK5L0Iv_EQoL1JefRL4&index=25)

- [CVPR 2020 Tutorial - Towards Annotation-Efficient Learning: Few-Shot, Self-Supervised, and Incremental Learning Approaches](https://annotation-efficient-learning.github.io/)


## Surveys

- **Continual Lifelong Learning with Neural Networks: A Review.** *German I. Parisi, et al.* Neural Networks 2019. [[Paper]](https://arxiv.org/pdf/1802.07569.pdf)
  
  > A survey on different approaches (regularization / dynamic architectures / rehearsal) for continual learning.

- **Three Scenarios for Continual Learning.** *Gido M. van de Ven and Andreas S. Tolias.* arXiv 2019. [[Paper]](https://arxiv.org/pdf/1904.07734.pdf) [[Code]](https://github.com/GMvandeVen/continual-learning)

  > A survey on three different scenarios (task / domain / class) for continual learning.

- **Continual Learning: A Comparative Study on How to Defy Forgetting in Classification Tasks.** *Matthias De Lange, et al.* arXiv 2019. [[Paper]](https://arxiv.org/pdf/1909.08383.pdf)

- **Continual Learning for Robotics: Definition, Framework, Learning Strategies, Opportunities and Challenges.** *Timothée Lesort, et al.* Inf. Fusion 2020. [[Paper]](https://www.sciencedirect.com/science/article/pii/S1566253519307377)


## Theses

- **Continual Learning with Deep Architectures.** *Vincenzo Lomonaco.* University of Bologna, 2019. [[Thesis]](http://amsdottorato.unibo.it/9073/1/vincenzo_lomonaco_thesis.pdf)

- **Continual Learning with Neural Networks.** *[Sayna Ebrahimi](https://saynaebrahimi.github.io/).* UC Berkeley, 2020. [[Thesis]](https://www2.eecs.berkeley.edu/Pubs/TechRpts/2020/EECS-2020-82.pdf)

- **Continual Learning: Tackling Catastrophic Forgetting in Deep Neural Networks with Replay Processes.** *Timothée Lesort.* ENSTA-ParisTech, 2020. [[Thesis]](https://arxiv.org/pdf/2007.00487.pdf)


## Blogs & Communities

- [Continuous Learning Strategies (CORe50 Dataset)](https://vlomonaco.github.io/core50/strategies.html)

- [Why Continual Learning is the key towards Machine Intelligence.](https://medium.com/continual-ai/why-continuous-learning-is-the-key-towards-machine-intelligence-1851cb57c308) *Vincenzo Lomonaco.* Medium, 2017.

- [ContinualAI](https://www.continualai.org/)


## Approaches


### Regularization

Impose constraints on the update of the neural weights.

- **Learning without Forgetting.** *Zhizhong Li and Derek Hoiem.* ECCV 2016. [[Paper]](https://arxiv.org/pdf/1606.09282.pdf) [[Code]](https://github.com/lizhitwo/LearningWithoutForgetting) (LwF)

- **Overcoming Catastrophic Forgetting in Neural Networks.** *James Kirkpatrick, et al.* PNAS 2017. [[Paper]](https://arxiv.org/pdf/1612.00796.pdf) (Elastic Weight Consolidation, EWC)

- **Continual Learning Through Synaptic Intelligence.** *Friedemann Zenke, et al.* ICML 2017. [[Paper]](https://arxiv.org/pdf/1703.04200.pdf) [[Code]](https://github.com/ganguli-lab/pathint) (Intelligent Synapses, IS)

- **Online Structured Laplace Approximations For Overcoming Catastrophic Forgetting.** *Hippolyt Ritter, et al.* NIPS 2018. [[Paper]](https://arxiv.org/pdf/1805.07810.pdf)

- **Improving and Understanding Variational Continual Learning.** *Siddharth Swaroop, et al.* NIPS 2018 Continual Learning Workshop. [[Paper]](https://arxiv.org/pdf/1905.02099.pdf) [[Code]](https://github.com/nvcuong/variational-continual-learning/tree/master/improved_ddm)

- **Memory Aware Synapses: Learning What (Not) to Forget.** *[Rahaf Aljundi](https://homes.esat.kuleuven.be/~raljundi/index.html), et al.* ECCV 2018. [[Paper]](https://arxiv.org/pdf/1711.09601.pdf) [[Code]](https://github.com/rahafaljundi/MAS-Memory-Aware-Synapses)

- **Task Agnostic Continual Learning Using Online Variational Bayes.** *Chen Zeno, et al.* arXiv 2018. [[Paper]](https://arxiv.org/pdf/1803.10123.pdf) [[Code]](https://github.com/igolan/bgd)

- **Task-Free Continual Learning.** *[Rahaf Aljundi](https://homes.esat.kuleuven.be/~raljundi/index.html), et al.* CVPR 2019. [[Paper]](https://arxiv.org/pdf/1812.03596.pdf)

- **Online Continual Learning with Maximally Interfered Retrieval.** *[Rahaf Aljundi](https://homes.esat.kuleuven.be/~raljundi/index.html), et al.* NIPS 2019. [[Paper]](https://papers.nips.cc/paper/9357-online-continual-learning-with-maximal-interfered-retrieval.pdf)

- **Uncertainty-based Continual Learning with Adaptive Regularization.** *Hongjoon Ahn, et al.* NIPS 2019. [[Paper]](https://arxiv.org/pdf/1905.11614.pdf) [[Code]](https://github.com/csm9493/UCL)

- **Efficient continual learning in neural networks with embedding regularization.** *Jary Pomponi, et al.* Neurocomputing 2020. [[Paper]](https://arxiv.org/pdf/1909.03742.pdf)

- **Uncertainty-guided Ccontinual Learning with Bayesian Neural Networks.** *Sayna Ebrahimi, et al.* ICLR 2020. [[Paper]](https://arxiv.org/pdf/1906.02425.pdf) [[Code]](https://github.com/SaynaEbrahimi/UCB)

- **Continual Learning with Node-Importance based Adaptive Group Sparse Regularization.** *Sangwon Jung, et al.* CVPR 2020 Workshop on Continual Learning in Computer Vision. [[Paper]](https://arxiv.org/pdf/2003.13726.pdf)

- **SOLA: Continual Learning with Second-Order Loss Approximation.** *Dong Yin, et al.* arXiv 2020. [[Paper]](https://arxiv.org/pdf/2006.10974v1.pdf)

- **CPR: Classifier-Projection Regularization for Continual Learning.** *Sungmin Cha, et al.* ICLR 2021. [[Paper]](https://openreview.net/pdf?id=F2v4aqEL6ze) [[Code]](https://github.com/csm9493/CPR_CL)


### Rehearsal

#### Extra Memory

Use extra memory to store data from previous tasks.

- **Gradient Episodic Memory for Continual Learning.** *David Lopez-Paz and Marc'Aurelio Ranzato.* NIPS 2017. [[Paper]](https://papers.nips.cc/paper/7225-gradient-episodic-memory-for-continual-learning.pdf) [[Code]](https://github.com/facebookresearch/GradientEpisodicMemory)

- **iCaRL: Incremental Classifier and Representation Learning.** *Sylvestre-Alvise Rebuffi, et al.* CVPR 2017. [[Paper]](https://openaccess.thecvf.com/content_cvpr_2017/papers/Rebuffi_iCaRL_Incremental_Classifier_CVPR_2017_paper.pdf) [[Code]](https://github.com/srebuffi/iCaRL)

- **Variational Continual Learning.** *Cuong V. Nguyen, et al.* ICLR 2018. [[Paper]](https://openreview.net/pdf?id=BkQqq0gRb) [[Code]](https://github.com/nvcuong/variational-continual-learning) (VCL)

- **Experience Replay for Continual Learning.** *David Rolnick, et al.* NIPS 2019. [[Paper]](https://papers.nips.cc/paper/8327-experience-replay-for-continual-learning.pdf)

- **Continual Learning with Bayesian Neural Networks for Non-Stationary Data.** *Richard Kurle, et al.* ICLR 2020. [[Paper]](https://openreview.net/pdf?id=SJlsFpVtDB)

- **Graph-Based Continual Learning.** *Binh Tang and David S. Matteson.* ICLR 2021. [[Paper]](https://openreview.net/pdf?id=HHSEKOnPvaO)

- **Gradient Projection Memory for Continual Learning.** *Gobinda Saha, et al.* ICLR 2021. [[Paper]](https://openreview.net/pdf?id=3AOj0RCNC2) [[Code]](https://github.com/sahagobinda/GPM)

 

#### Generative Replay

Mimic past data by generative models (GAN, VAE, etc).

- **Continual Learning with Deep Generative Replay.** *Hanul Shin, et al.* NIPS 2017. [[Paper]](https://papers.nips.cc/paper/6892-continual-learning-with-deep-generative-replay.pdf)

- **FearNet: Brain-Inspired Model for Incremental Learning.** *Ronald Kemker and Christopher Kanan.* ICLR 2018. [[Code]](https://openreview.net/pdf?id=SJ1Xmf-Rb)

- **Generative Models from the perspective of Continual Learning.** *Timothée Lesort, et al.* IJCNN 2019. [[Paper]](https://arxiv.org/pdf/1812.09111.pdf) [[Code]](https://github.com/TLESORT/Generative_Continual_Learning)

- **Learning to Remember: A Synaptic Plasticity Driven Framework for Continual Learning.** *Oleksiy Ostapenko, et al.* CVPR 2019. [[Paper]](https://openaccess.thecvf.com/content_CVPR_2019/papers/Ostapenko_Learning_to_Remember_A_Synaptic_Plasticity_Driven_Framework_for_Continual_CVPR_2019_paper.pdf) [[Code]](https://github.com/SAP-samples/machine-learning-dgm)

- **Continual Unsupervised Representation Learning.** *Dushyant Rao, et al.* NIPS 2019. [[Paper]](https://papers.nips.cc/paper/8981-continual-unsupervised-representation-learning.pdf) [[Code]](https://github.com/deepmind/deepmind-research/tree/master/curl)

  > Continual learning without task boundaries via dynamic expansion and generative replay (VAE).


### Dynamic Expansion

Increase in network capacity that handles new tasks without affecting learned networks.

- **Net2Net: Accelerating Learning via Knowledge Transfer.** *Tianqi Chen, et al.* ICLR 2016. [[Paper]](https://arxiv.org/pdf/1511.05641.pdf)

- **Progressive Neural Networks.** *Andrei A. Rusu, et al.* arXiv 2016. [[Paper]](https://arxiv.org/pdf/1606.04671.pdf)

- **Expert Gate: Lifelong Learning with a Network of Experts.** *[Rahaf Aljundi](https://homes.esat.kuleuven.be/~raljundi/index.html), et al.* CVPR 2017. [[Paper]](https://openaccess.thecvf.com/content_cvpr_2017/papers/Aljundi_Expert_Gate_Lifelong_CVPR_2017_paper.pdf) [[Re-implementation]](https://github.com/wannabeOG/ExpertNet-Pytorch)

- **Random Path Selection for Continual Learning.** *Jathushan Rajasegaran, et al.* NIPS 2019. [[Paper]](http://papers.nips.cc/paper/9429-random-path-selection-for-continual-learning.pdf) [[Code]](https://github.com/brjathu/RPSnet)

- **Compacting, Picking and Growing for Unforgetting Continual Learning.** *Steven C. Y. Hung, et al.* NIPS 2019. [[Paper]](https://papers.nips.cc/paper/9518-compacting-picking-and-growing-for-unforgetting-continual-learning.pdf) [[Code]](https://github.com/ivclab/CPG)

  > Gradual model pruning (compacting) → Train a 0-1 mask to pick weights of previous tasks (picking) → Dynamic expansion (growing)

- **Continual Unsupervised Representation Learning.** *Dushyant Rao, et al.* NIPS 2019. [[Paper]](https://papers.nips.cc/paper/8981-continual-unsupervised-representation-learning.pdf) [[Code]](https://github.com/deepmind/deepmind-research/tree/master/curl)

  > Continual learning without task boundaries via dynamic expansion and generative replay (VAE).

- **Continual Learning with Adaptive Weights (CLAW).** *Tameem Adel, et al.* ICLR 2020. [[Paper]](https://openreview.net/pdf?id=Hklso24Kwr) 

- **A Neural Dirichlet Process Mixture Model for Task-Free Continual Learning.** *Soochan Lee, et al.* ICLR 2020. [[Paper]](https://openreview.net/pdf?id=SJxSOJStPr) [[Code]](https://github.com/soochan-lee/CN-DPM)


### Task Free

- **Task Agnostic Continual Learning Using Online Variational Bayes.** *Chen Zeno, et al.* arXiv 2018. [[Paper]](https://arxiv.org/pdf/1803.10123.pdf) [[Code]](https://github.com/igolan/bgd)

- **Task-Free Continual Learning.** *[Rahaf Aljundi](https://homes.esat.kuleuven.be/~raljundi/index.html), et al.* CVPR 2019. [[Paper]](https://openaccess.thecvf.com/content_CVPR_2019/papers/Aljundi_Task-Free_Continual_Learning_CVPR_2019_paper.pdf)

- **Continual Unsupervised Representation Learning.** *Dushyant Rao, et al.* NIPS 2019. [[Paper]](https://papers.nips.cc/paper/8981-continual-unsupervised-representation-learning.pdf) [[Code]](https://github.com/deepmind/deepmind-research/tree/master/curl)

  > Continual learning without task boundaries via dynamic expansion (Dirichlet process) and generative replay (VAE).

- **Reconciling Meta-Learning and Continual Learning with Online Mixtures of Tasks.** *Ghassen Jerfel, et al.* NIPS 2019. [[Paper]](https://arxiv.org/pdf/1812.06080.pdf)

- **Continuous Meta-Learning without Tasks.** *James Harrison, et al.* arXiv 2019. [[Paper]](https://arxiv.org/pdf/1912.08866.pdf) [[Code]](https://github.com/StanfordASL/moca) [[OpenReview]](https://openreview.net/forum?id=r1l1myStwr)

  > Integrate Bayesian online changepoint detection algorithm with existing meta-learning approaches to enable meta-learning in task-unsegmented settings.

- **A Neural Dirichlet Process Mixture Model for Task-Free Continual Learning.** *Soochan Lee, et al.* ICLR 2020. [[Paper]](https://openreview.net/pdf?id=SJxSOJStPr) [[Code]](https://github.com/soochan-lee/CN-DPM)

- **Task Agnostic Continual Learning via Meta Learning.** *Xu He, et al.* ICML 2020 LifelongML Workshop. [[Paper]](https://openreview.net/pdf?id=AeIzVxdJgeb)



### + Meta Learning

[Here](/papers/dl/meta-learning/) is also a list of literatures for Meta Learning.

- **Meta Continual Learning.** *Risto Vuori, et al.* arXiv 2018. [[Paper]](https://arxiv.org/pdf/1806.06928.pdf)

  > Train a RNN as optimizer, and the optimizer leverages information of both current and previous tasks to learn to preserve previous parameters.


- **Learning to Learn without Forgetting by Maximizing Transfer and Minimizing Interference.** *Matthew Riemer, et al.* ICLR 2019. [[Paper]](https://arxiv.org/pdf/1810.11910.pdf) [[Code]](https://github.com/mattriemer/MER) (Meta-Experience Replay, MER)

  > Combine Reptile (a meta-learning algorithm) with experience replay for rapidly learning the current and future experience and preserving past knowledge.

- **Meta-Learning Representations for Continual Learning.** *Khurram Javed and Martha White.* NIPS 2019. [[Paper]](https://arxiv.org/pdf/1905.12588.pdf) [[Code]](https://github.com/khurramjaved96/mrcl) [[Poster]](https://sites.ualberta.ca/~kjaved/posters/mrcl.pdf)

- **Reconciling Meta-Learning and Continual Learning with Online Mixtures of Tasks.** *Ghassen Jerfel, et al.* NIPS 2019. [[Paper]](https://arxiv.org/pdf/1812.06080.pdf)

- **Continuous Meta-Learning without Tasks.** *James Harrison, et al.* arXiv 2019. [[Paper]](https://arxiv.org/pdf/1912.08866.pdf) [[Code]](https://github.com/StanfordASL/moca) [[OpenReview]](https://openreview.net/forum?id=r1l1myStwr)

  > Integrate Bayesian online changepoint detection algorithm with existing meta-learning approaches to enable meta-learning in task-unsegmented settings.

- **Task Agnostic Continual Learning via Meta Learning.** *Xu He, et al.* ICML 2020 LifelongML Workshop. [[Paper]](https://openreview.net/pdf?id=AeIzVxdJgeb)

- **La-MAML: Look-ahead Meta Learning for Continual Learning.** *Gunshi Gupta, et al.* NIPS 2020. [[Paper]](https://arxiv.org/pdf/2007.13904.pdf) [[Code]](https://github.com/montrealrobotics/La-MAML)


### + Reinforcement Learning

- **Reinforced Continual Learning.** *Ju Xu and Zhanxing Zhu.* NIPS 2018. [[Paper]](https://papers.nips.cc/paper/7369-reinforced-continual-learning.pdf) [[Code]](https://github.com/xujinfan/Reinforced-Continual-Learning)

- **Experience Replay for Continual Learning.** *David Rolnick, et al.* NIPS 2019. [[Paper]](https://papers.nips.cc/paper/8327-experience-replay-for-continual-learning.pdf)
 

### + Generative Modeling

- **Lifelong GAN: Continual Learning for Conditional Image Generation.** *Mengyao Zhai, et al.* ICCV 2019. [[Paper]](https://openaccess.thecvf.com/content_ICCV_2019/papers/Zhai_Lifelong_GAN_Continual_Learning_for_Conditional_Image_Generation_ICCV_2019_paper.pdf) 

- **Generative Models from the perspective of Continual Learning.** *Timothée Lesort, et al.* IJCNN 2019. [[Paper]](https://arxiv.org/pdf/1812.09111.pdf) [[Code]](https://github.com/TLESORT/Generative_Continual_Learning)


### Bayesian

- **Variational Continual Learning.** *Cuong V. Nguyen, et al.* ICLR 2018. [[Paper]](https://openreview.net/pdf?id=BkQqq0gRb) [[Code]](https://github.com/nvcuong/variational-continual-learning) (VCL)

- **Online Structured Laplace Approximations For Overcoming Catastrophic Forgetting.** *Hippolyt Ritter, et al.* NIPS 2018. [[Paper]](https://arxiv.org/pdf/1805.07810.pdf)

- **Improving and Understanding Variational Continual Learning.** *Siddharth Swaroop, et al.* NIPS 2018 Continual Learning Workshop. [[Paper]](https://arxiv.org/pdf/1905.02099.pdf) [[Code]](https://github.com/nvcuong/variational-continual-learning/tree/master/improved_ddm)

- **Task Agnostic Continual Learning Using Online Variational Bayes.** *Chen Zeno, et al.* arXiv 2018. [[Paper]](https://arxiv.org/pdf/1803.10123.pdf) [[Code]](https://github.com/igolan/bgd)

- **Continual Unsupervised Representation Learning.** *Dushyant Rao, et al.* NIPS 2019. [[Paper]](https://papers.nips.cc/paper/8981-continual-unsupervised-representation-learning.pdf) [[Code]](https://github.com/deepmind/deepmind-research/tree/master/curl)

  > Continual learning without task boundaries via dynamic expansion and generative replay (VAE).

- **Reconciling Meta-Learning and Continual Learning with Online Mixtures of Tasks.** *Ghassen Jerfel, et al.* NIPS 2019. [[Paper]](https://arxiv.org/pdf/1812.06080.pdf)

- **Uncertainty-based Continual Learning with Adaptive Regularization.** *Hongjoon Ahn, et al.* NIPS 2019. [[Paper]](https://arxiv.org/pdf/1905.11614.pdf) [[Code]](https://github.com/csm9493/UCL)

- **Continuous Meta-Learning without Tasks.** *James Harrison, et al.* arXiv 2019. [[Paper]](https://arxiv.org/pdf/1912.08866.pdf) [[Code]](https://github.com/StanfordASL/moca) [[OpenReview]](https://openreview.net/forum?id=r1l1myStwr)

  > Integrate Bayesian online changepoint detection algorithm with existing meta-learning approaches to enable meta-learning in task-unsegmented settings.

- **Task Agnostic Continual Learning via Meta Learning.** *Xu He, et al.* ICML 2020 LifelongML Workshop. [[Paper]](https://openreview.net/pdf?id=AeIzVxdJgeb)

- **A Neural Dirichlet Process Mixture Model for Task-Free Continual Learning.** *Soochan Lee, et al.* ICLR 2020. [[Paper]](https://openreview.net/pdf?id=SJxSOJStPr) [[Code]](https://github.com/soochan-lee/CN-DPM)

- **Continual Learning with Bayesian Neural Networks for Non-Stationary Data.** *Richard Kurle, et al.* ICLR 2020. [[Paper]](https://openreview.net/pdf?id=SJlsFpVtDB)

- **Uncertainty-guided Ccontinual Learning with Bayesian Neural Networks.** *Sayna Ebrahimi, et al.* ICLR 2020. [[Paper]](https://arxiv.org/pdf/1906.02425.pdf) [[Code]](https://github.com/SaynaEbrahimi/UCB)


### New Settings

- **Online Fast Adaptation and Knowledge Accumulation (OSAKA): a New Approach to Continual Learning.** *Massimo Caccia, et al.* arXiv 2020. [[Paper]](https://arxiv.org/pdf/2003.05856.pdf) [[Code]](https://github.com/ElementAI/osaka)

- **Wandering Within a World: Online Contextualized Few-Shot Learning.** *Mengye Ren, et al.* arXiv 2020. [[Paper]](https://arxiv.org/pdf/2007.04546.pdf)

- **Compositional Language Continual Learning.** *Yuanpeng Li, et al.* ICLR 2020. [[Paper]](https://openreview.net/pdf?id=rklnDgHtDS) [[Code]](https://github.com/yli1/CLCL)

  > Continual learning in NLP for seq2seq style tasks.


## Workshops

- [Continual Learning and Deep Networks Workshop, NIPS 2016](https://sites.google.com/site/cldlnips2016/submissions)
- [Continuous and Open-Set Learning Workshop, CVPR 2017](https://erodner.github.io/continuouslearningcvpr2017/)
- [First Lifelong Machine Learning Workshop, ICML 2017](https://rlabstraction2016.wixsite.com/icml-2017)
- [Second Lifelong Machine Learning Workshop, ICML 2018](https://sites.google.com/view/llarla2018/home)
- [Continual learning Workshop, NeurIPS 2018](https://sites.google.com/view/continual2018)
- [Third Lifelong Machine Learning Workshop, RLDM 2019](https://sites.google.com/view/llarla/home)
- [Workshop on Continual Learning, ICML 2020](https://sites.google.com/view/cl-icml/organizers?authuser=0)
- [4th Lifelong Machine Learning Workshop, ICML 2020](https://lifelongml.github.io/)
