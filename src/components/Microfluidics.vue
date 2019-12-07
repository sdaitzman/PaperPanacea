<template>
  <div class="container-wrapper">
    <div class="head-mf">
      <h1>Paper Experiments</h1>
      <div class="subtitle">
        <h3>Steps before designing the optimal microfluidic device to be used in lead detection</h3>
      </div>
      <div class="description">
        <p>This document is a record of our experiments and results. The goal of these labs are to build our knowledge on the minimum requirements necessary for designing the paper microfluidic devices. The experiments will determine the optimal channel widths, thickness of lines, and length of time of heating the wax papers.</p>
      </div>
    </div>
    <div class="page-content">
      <div class="section">
        <div class="title-name">
          <h3>Baking Experiment:</h3>
        </div>
        <div class="inside-content">
          <p>One issue that we ran into during initial experimentation was leakage. This is normal for thinner wax widths, but even the thickest widths had liquid diffusion on the bottom which indicated that we were possibly not baking the paper devices long enough. The hot plate was set to level 4.</p>
          <p>We decided to conduct an experiment where we baked 3 identical test panels for different amounts of times: 1 minute, 2 minutes, and 3 minutes. We then added variable amount of colored water.</p>
          <div class="image-box">
            <div class="image-wrapper">
              <img src="../assets/1.JPG" alt="img1" />
              <img src="../assets/2.jpg" alt="img2" />
              <img src="../assets/3.jpg" alt="img3" />
            </div>
            <div
              class="caption"
            >Test results for the baking experiment. From left to right, the papers were baked 1 minutes, 2 minutes, and 3 minutes</div>
          </div>
          <p>Based on the results, we made the design decision to bake our future papers for up to 3 minutes. The difference between 2 minutes and 3 minutes was very small, for safety we will be baking for up to 3 minutes. For this experiment, we did not consider it as a line thickness test as there was variable heating times.</p>
        </div>
      </div>
      <div class="section">
        <div class="title-name">
          <h3>Line Thinkness Experiment:</h3>
        </div>
        <div class="inside-content">
          <p>The purpose of this experiment was to determine the minimum line thickness that can be used in our designs for the microfluidic device. The line thickness is referring to the line thickness of the wax that is applied to the paper.</p>
          <p>As presented in the diagram below, the more the ink, the deeper it penetrates through the paper and creates channels. If the line is not thick enough, then the ink will not seep to the bottom of the paper and leakage/diffusion will occur at the bottom of the pages.</p>
          <div class="image-box">
            <div class="image-wrapper">
              <img src="../assets/4.png" alt="img4" />
            </div>
          </div>
          <p>This experiment will be testing between 6 different widths: 3pt, 2pt, 1pt, 0.75pt, 0.5pt, and 0.25pt. 100 uL of dyed water was dropped into each square. The paper was suspended to that the water that bled through to the bottom would not collect and spread outside of the lines.</p>
          <p>Based on these results, any line thickness of 1 pt or smaller would result in bleeding. For thicknesses of 2pt and 3 pt there was little to no evidence of bleeding. After baking for a longer amount of time, the amount of bleeding was reduced but not enough where 1 pt did not have any bleeding.</p>
        </div>
      </div>

      <div class="section">
        <div class="title-name">
          <h3>Channel Width and Flow Rate Experiments:</h3>
        </div>
        <div class="inside-content">
          <p>The purpose of the first experiment is to determine the optimal channel width and flow rate. The control of this experiment was the water sample, the amount of water being added to channels, and the test sheets.</p>
          <p>Initially, the experiment was performed without our 3 minute baking time. The channel widths being tested were 0.5 mm, 1 mm, 1.5 mm, 2 mm, and 2.5 mm. 100uL of water was added to the circular compartments at the base of each of the channels. Due to the shorter baking time,a lot of the water bled through and none of the tests had water that reached the end of the channels.</p>
          <p>5 channel widths were tested in this experiment: 0.5 mm, 1 mm, 1.5 mm, 2 mm, and 2.5 mm. The sheets were baked for 3 minutes (as decided by the baking test). Then 100 uL of dyed water is added to the channels. The test sheets were suspended such that the channels and their wells were not in contact with any surfaces in order to prevent leakage on the bottom of the sheet.</p>
          <p>This test was repeated again on November 5th under the same circumstances. In this test the papers were baked for longer than before (though not for the general 3 minutes) . The fastest flow rate was 0.08467 mm per second.</p>
          <p>We redid the experiments once more with our new regulations that were determined by previous tests- baking time - 3 minutes of baking for each sheet.</p>
          <div class="image-box">
            <div class="image-wrapper">
              <img src="../assets/img5.png" alt="img5" style="transform: rotate(180deg);" />
            </div>
            <div class="caption">The image below shows the results of the experiments</div>
          </div>
          <p>As shown in the image, the minimum channel width can be around 1.5 mm however the drawback is its long travel time, which is not preferred. The optimal channel width would be around 2.5 mm. This had the fastest travel speed as well. It was also the last channel to be filled.</p>
          <p>The 2.5 mm channel had a flow rate of about 1 in 0.09769 millimeters per second. The 2 mm channel had a flow rate of .08759 millimeters per second. We also experimented with disregarding line thickness and surrounding the channels with wax. This did not have any noticeable improvements to flow rate, so uses of that method would have to disregard flow rate.</p>
        </div>
      </div>

      <div class="section">
        <div class="title-name">
          <h3>Mixing Experiment:</h3>
        </div>
        <div class="inside-content">
          <p>The purpose of the experiment was to test out mixing fluids in microfluidic devices using the channels. We tested it out on 2 liquid colors first to see the possibility of performing this task. When the two liquids were added to their respective containments, they pulled to the center of the channel connecting them and they mixed in the center.</p>
          <div class="image-box">
            <div class="image-wrapper">
              <img src="../assets/img6.png" alt="img6" />
            </div>
          </div>
          <p>The figure above shows the mixing of two liquid samples. They meet in the center, but it is visible that they were not added simultaneously so one side moved farther than the other which can cause an imbalance in mixing.</p>
          <p>In order to add more control to the mixing of the fluids, we experimented with creating a valve. This technique involves cutting a section in between the two samples, causing a disconnect in the flow which can control when the user would like them to mix together and the flow rate to a sense. The microfluidic device was heated for 3 minutes and allowed to dry before the procedure was done.</p>
          <p>Once the device was set for a bit, a section in the center of the channel was cut, creating a flap so that when it is pulled down it connects the two containers and allows them to mix. A piece of tape was added to the bottom of the device so that when the valve was pulled down it would stay in place while the liquids mixed.</p>
          <div class="image-box">
            <div class="image-wrapper">
              <img src="../assets/img7.png" alt="img7" />
            </div>
            <div
              class="caption"
            >As shown in the image above, the liquids successfully mixed in the center of the device.</div>
          </div>

          <p>Another test we had to do was experiment with having a wet fluid mix with a dried fluid. This is necessary as for the reaction of the lead and indicator, one of the samples is required to be dry at the time of testing.</p>
          <p>We repeated the valve procedure but this time around we added fluid to one side of the unit and allowed it to dry. Once it was completely dry, we added another fluid on the other side of the device and closed the valve. The liquid travelled to the other side of the channel. This took more time than liquid mixing as only one of the samples was moving while the dry sample remained in its place. Once the liquid got to the end it hydrated the dry sample and mixed the two samples. Based on these results, we were able to confirm that the reaction required to detect lead can be performed on the microfluidic device.</p>
        </div>
      </div>

      <div class="section">
        <div class="title-name">
          <h3>Water Capacity Experiment:</h3>
        </div>
        <div class="inside-content">
          <p>Another test that we had to perform was a water capacity test. This was to determine the optimum amount of water that can be held in the different diameter water wells. A paper holder was designed and 3D printed. It could hold the device in place while also keeping it suspended in the air so that bottom leakage would not occur. Different circles with different diameters were printed and heated at level 4 for 3 minutes on the hot plate. There were 4 diameters being tested: 5 mm, 10 mm, 15 mm, and 20 mm. Each had water added to them in increments. Once a bubble formed beneath the paper, water was no longer added and the volume was recorded.</p>

          <div class="image-box">
            <div class="image-wrapper">
            <img src="../assets/img8.jpg" alt="img8" />
            </div>
            <div
              class="caption"
            >The table below presents the results of the water capacity experiments</div>
          </div>

          <p>It can be concluded that the capacity of the wells scales linearly based on the area of the paper. This is useful as with this relationship, we can determine how much water we can put onto the rhodizonate to start the detection reaction.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Microfluidics" //this is the name of the component
};
</script>

<style>
.container-wrapper {
  min-height: 100%;
  width: 100%;
  min-width: 800px;
  background: #e5e5e5;
  text-align: center;
  display: inline-block;
}

.page-content {
  height: 100%;
  padding-top: 20px;
}

.section {
  padding-bottom: 10px;
}

.title-name h3 {
  margin-bottom: 5px;
}

.description {
  font-family: "Open Sans", sans-serif;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.description p {
  padding-left: 30px;
  padding-right: 30px;
  text-align: justify;
}

.inside-content p {
  margin-top: 8px;
  min-width: 800px;
}

.image-wrapper {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.image-wrapper img {
  flex: 1;
  padding: 10px;
  width: 30%;
  margin: auto;
}

.image-box {
  margin-bottom: 16px;
  text-align: center;
}

.caption {
  font-size: small;
  font-style: italic;
  text-align: center;
}

p {
  font-size: medium;
}

.page-content {
  text-align: left;
  font-family: "Open Sans", sans-serif;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}
</style>